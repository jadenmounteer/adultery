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
  public shopingListsChanged = new Subject<ShoppingList[]>();

  constructor(
    private authService: AuthService,
    private firestore: AngularFirestore
  ) {}

  public fetchShoppingLists() {
    // const userId = this.authService.userId;
    // this.firestore
    //   .collection('exercises', (ref) => ref.where('userId', '==', userId))
    //   .snapshotChanges()
    //   .pipe(
    //     map((docArray: any[]) => {
    //       // Here we map the data coming from the db to be the Quote type.
    //       return docArray.map((doc) => {
    //         return {
    //           id: doc.payload.doc.id,
    //           defaultExercise: doc.payload.doc.data().defaultExercise,
    //           defaultTags: doc.payload.doc.data().defaultTags,
    //           description: doc.payload.doc.data().description,
    //           exerciseImage: doc.payload.doc.data().exerciseImage,
    //           name: doc.payload.doc.data().name,
    //           userId: doc.payload.doc.data().userId,
    //         };
    //       });
    //     })
    //   )
    //   .subscribe((exercises: Exercise[]) => {
    //     this.exercises = exercises;
    //     this.exercisesChanged.next([...this.exercises]);
    //   });
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

  //   public deleteShoppingList(exerciseToDelete: Exercise) {
  //     const exercisesRef = this.firestore.collection('exercises');
  //     exercisesRef.doc(exerciseToDelete.id).delete();
  //   }
}
