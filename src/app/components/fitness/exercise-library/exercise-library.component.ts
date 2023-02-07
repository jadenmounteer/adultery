import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ExercisesService } from 'src/app/services/exercises-service';
import { Exercise } from 'src/app/types/exercise';

@Component({
  selector: 'app-exercise-library',
  templateUrl: './exercise-library.component.html',
  styleUrls: ['./exercise-library.component.scss'],
})
export class ExerciseLibraryComponent implements OnInit, OnDestroy {
  private exercisesSubscription!: Subscription;
  public defaultExercises: Array<Exercise> = [];
  public exercisesLoaded: boolean = false;

  constructor(private exercisesService: ExercisesService) {}

  ngOnInit(): void {
    this.exercisesSubscription =
      this.exercisesService.exercisesChanged.subscribe((exercises) => {
        this.defaultExercises = exercises;
        this.exercisesLoaded = true;
        console.log(exercises);
      });
    this.exercisesService.fetchDefaultExercises();
  }

  ngOnDestroy(): void {
    this.exercisesSubscription.unsubscribe();
  }
}
