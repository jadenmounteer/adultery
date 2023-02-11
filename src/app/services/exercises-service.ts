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
        this.exercises = exercises.filter((exercise: Exercise) => {
          return exercise.userId === userId;
        });
        this.exercisesChanged.next([...this.exercises]);
      });
  }

  public addNewExercise(newExercise: Exercise) {
    const exercisesRef = this.firestore.collection('exercises');
    exercisesRef.add({ ...newExercise });
  }

  public updateExercise(exerciseToUpdate: Exercise) {
    console.log('Updating exercise!');
    const exercisesRef = this.firestore.collection('exercises');
    exercisesRef.doc('CDtQIsa9ubMDdn8zqGKl').update({
      name: exerciseToUpdate.name,
      description: exerciseToUpdate.description,
    });
  }
}
