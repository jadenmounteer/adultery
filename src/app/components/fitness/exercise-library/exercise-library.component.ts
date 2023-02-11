import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { ExercisesService } from 'src/app/services/exercises-service';
import { Exercise } from 'src/app/types/exercise';
import { AddExerciseModalComponent } from '../../add-exercise-modal/add-exercise-modal.component';

@Component({
  selector: 'app-exercise-library',
  templateUrl: './exercise-library.component.html',
  styleUrls: ['./exercise-library.component.scss'],
})
export class ExerciseLibraryComponent implements OnInit, OnDestroy {
  private exercisesSubscription!: Subscription;
  public defaultExercises: Array<Exercise> = [];
  public exercisesLoaded: boolean = false;

  constructor(
    private exercisesService: ExercisesService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.exercisesSubscription =
      this.exercisesService.exercisesChanged.subscribe((exercises) => {
        this.defaultExercises = exercises;
        this.exercisesLoaded = true;
      });
    this.exercisesService.fetchDefaultExercises();
  }

  ngOnDestroy(): void {
    this.exercisesSubscription.unsubscribe();
  }

  public onClickAddButton() {
    const modalRef = this.modalService.open(AddExerciseModalComponent);
    modalRef.componentInstance.name = 'World';
  }
}
