import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ExercisesService } from 'src/app/services/exercises-service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-edit-exercise-modal',
  templateUrl: './edit-exercise-modal.component.html',
  styleUrls: ['./edit-exercise-modal.component.scss'],
})
export class EditExerciseModalComponent implements OnInit {
  constructor(
    public activeModal: NgbActiveModal,
    private exercisesService: ExercisesService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {}

  public onSubmit(form: NgForm) {
    // const newExercise: Exercise = {
    //   userId: this.authService.userId,
    //   defaultExercise: false,
    //   exerciseImage: null,
    //   name: form.value.exerciseName,
    //   description: form.value.exerciseDescription,
    //   defaultTags: null,
    // };

    // this.exercisesService.addNewExercise(newExercise);
    this.activeModal.close('Close click');
  }
}
