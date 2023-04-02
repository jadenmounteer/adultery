import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Subject, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { Group } from '../types/group';
import { AuthService } from '../components/auth/auth.service';

@Injectable({ providedIn: 'root' })
export class ShoppingListService {
  public groups: Array<Group> = [];
  public groupsChanged = new Subject<Group[]>();

  constructor(
    private authService: AuthService,
    private firestore: AngularFirestore
  ) {}

  public fetchGroups() {
    // Set user object
    this.authService.user$.subscribe((data) => {
      console.log(data);
    });
    // const userId = this.authService.userId;
    // this.firestore
    //   .collection('groups', (ref) => ref.where('userId', 'in', userId))
    //   .snapshotChanges()
    //   .pipe(
    //     map((docArray: any[]) => {
    //       // Here we map the data coming from the db to be the Quote type.
    //       return docArray.map((doc) => {
    //         if (!doc.payload.doc.data().id) {
    //           this.addPayloadIdToGroup(doc.payload.doc.id);
    //         }
    //         return {
    //           id: doc.payload.doc.id,
    //           userId: doc.payload.doc.data().userId,
    //           listName: doc.payload.doc.data().listName,
    //           items: doc.payload.doc.data().items,
    //           complete: doc.payload.doc.data().complete,
    //         };
    //       });
    //     })
    //   )
    //   .subscribe((groups: Group[]) => {
    //     this.shopingLists = shopingLists;
    //     this.shoppingListsChanged.next([...this.shopingLists]);
    //   });
  }

  public addNewGroup(newGroup: Group) {
    const shoppingListRef = this.firestore.collection('groups');
    shoppingListRef.add({ ...newGroup });
  }

  private addPayloadIdToGroup(payloadId: string): void {
    const shoppingListRef = this.firestore.collection('groups');

    shoppingListRef.doc(payloadId).update({
      id: payloadId,
    });
  }
}
