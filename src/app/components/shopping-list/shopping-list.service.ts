import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { ShoppingList } from './shopping-list-types/shopping-list';
import { AuthService } from '../auth/auth.service';

@Injectable({ providedIn: 'root' })
export class ShoppingListService {
  public shopingLists: Array<ShoppingList> = [];
  public shoppingListsChanged = new Subject<ShoppingList[]>();

  constructor(
    private authService: AuthService,
    private firestore: AngularFirestore
  ) {}

  // TODO might want to return an observable here https://stackblitz.com/edit/angular-fe12nf?file=src%2Fapp%2Fapp.component.ts,src%2Fapp%2FObservables.ts
  public getShoppingList(id: string): ShoppingList | undefined {
    let shoppingList = this.shopingLists.find((shoppingList) => {
      return shoppingList.id === id;
    });

    return shoppingList;
  }

  public fetchShoppingList(id: string) {
    this.firestore
      .collection('shopping-lists', (ref) => ref.where('id', '==', id))
      .snapshotChanges()
      .pipe(
        map((docArray: any[]) => {
          // Here we map the data coming from the db to be the Quote type.
          return docArray.map((doc) => {
            return {
              id: doc.payload.doc.id,
              userId: doc.payload.doc.data().userId,
              listName: doc.payload.doc.data().listName,
              items: doc.payload.doc.data().items,
              complete: doc.payload.doc.data().complete,
            };
          });
        })
      )
      .subscribe((shopingLists: ShoppingList[]) => {
        this.shopingLists = shopingLists;
        this.shoppingListsChanged.next([...this.shopingLists]);
      });
  }

  public fetchShoppingLists() {
    const userId = this.authService.userId;
    this.firestore
      .collection('shopping-lists', (ref) => ref.where('userId', '==', userId))
      .snapshotChanges()
      .pipe(
        map((docArray: any[]) => {
          // Here we map the data coming from the db to be the Quote type.
          return docArray.map((doc) => {
            if (!doc.payload.doc.data().id) {
              this.addPayloadIdToShoppingList(doc.payload.doc.id);
            }
            return {
              id: doc.payload.doc.id,
              userId: doc.payload.doc.data().userId,
              listName: doc.payload.doc.data().listName,
              items: doc.payload.doc.data().items,
              complete: doc.payload.doc.data().complete,
            };
          });
        })
      )
      .subscribe((shopingLists: ShoppingList[]) => {
        this.shopingLists = shopingLists;
        this.shoppingListsChanged.next([...this.shopingLists]);
      });
  }

  public addNewShoppingList(newShoppingList: ShoppingList) {
    const shoppingListRef = this.firestore.collection('shopping-lists');
    shoppingListRef.add({ ...newShoppingList });
  }

  public updateShoppingList(shoppingListToUpdate: ShoppingList) {
    const shoppingListRef = this.firestore.collection('shopping-lists');
    // shoppingListRef.doc(shoppingListToUpdate.id).update({
    //   name: shoppingListToUpdate.name,
    //   description: shoppingListToUpdate.description,
    // });
  }

  private addPayloadIdToShoppingList(payloadId: string): void {
    const shoppingListRef = this.firestore.collection('shopping-lists');
    shoppingListRef.doc(payloadId).update({
      id: payloadId,
    });
  }

  public deleteShoppingList(shoppingListToDelete: ShoppingList) {
    const shoppingListsRef = this.firestore.collection('shopping-lists');
    shoppingListsRef.doc(shoppingListToDelete.id).delete();
  }
}
