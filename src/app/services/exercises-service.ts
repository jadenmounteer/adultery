import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../components/auth/auth.service';
import { Exercise } from '../types/exercise';

@Injectable()
export class ExercisesService {
  public exercises: Array<Exercise> = [];
  public exercisesChanged = new Subject<Exercise[]>();

  constructor(
    private firestore: AngularFirestore,
    private authService: AuthService
  ) {}

  public fetchExercises() {
    this.firestore
      .collection('exercises')
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
        const userId = this.authService.userId;
        console.log(exercises);
        this.exercises = exercises.filter((exercise: Exercise) => {
          return exercise.userId === userId;
        });
        this.exercisesChanged.next([...this.exercises]);
      });
  }

  public addNewExercise(newExercise: Exercise) {
    // TODO I need to find a way to create the document id.
    // This site might explain how: https://firebase.google.com/docs/firestore/manage-data/add-data
    // Or I can watch the angular tutorial
    newExercise.id = this.firestore.createId();
    const exercisesRef = this.firestore.collection('exercises');
    exercisesRef.add({ ...newExercise });
  }

  public updateExercise(exerciseToUpdate: Exercise) {
    console.log(`Updating exercise id: ${exerciseToUpdate.id}`);
    const exercisesRef = this.firestore.collection('exercises');
    exercisesRef.doc(exerciseToUpdate.id).update({
      name: exerciseToUpdate.name,
      description: exerciseToUpdate.description,
    });
  }

  public deleteExercise(exerciseToDelete: Exercise) {
    const exercisesRef = this.firestore.collection('exercises');
    exercisesRef.doc(exerciseToDelete.id).delete();
  }
}
