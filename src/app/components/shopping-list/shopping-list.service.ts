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

  public fetchShoppingLists() {
    const userId = this.authService.userId;
    this.firestore
      .collection('shopping-lists', (ref) => ref.where('userId', '==', userId))
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

  public addNewShoppingList(newShoppingList: ShoppingList) {
    const shoppingListRef = this.firestore.collection('shopping-lists');
    shoppingListRef.add({ ...newShoppingList });
  }

  //   public updateShoppingList(exerciseToUpdate: Exercise) {
  //     const exercisesRef = this.firestore.collection('exercises');
  //     exercisesRef.doc(exerciseToUpdate.id).update({
  //       name: exerciseToUpdate.name,
  //       description: exerciseToUpdate.description,
  //     });
  //   }

  public deleteShoppingList(shoppingListToDelete: ShoppingList) {
    const shoppingListsRef = this.firestore.collection('shoppingLists');
    shoppingListsRef.doc(shoppingListToDelete.id).delete();
  }
}
