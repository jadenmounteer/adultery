import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Exercise } from '../types/exercise';

@Injectable()
export class QuotesService {
  public defaultExercises: Array<Exercise> = [];
  public exercisesChanged = new Subject<Exercise[]>();

  constructor(private firestore: AngularFirestore) {}

  public fetchDefaultExercises() {
    this.firestore
      .collection('defaultExercises')
      .snapshotChanges()
      .pipe(
        map((docArray: any[]) => {
          // Here we map the data coming from the db to be the Quote type.
          return docArray.map((doc) => {
            return {
              id: doc.payload.doc.id,
              ...doc.payload.doc.data(),
            };
          });
        })
      )
      .subscribe((exercises: Exercise[]) => {
        this.defaultExercises = exercises;
        this.exercisesChanged.next([...this.defaultExercises]);
      });
  }
}
