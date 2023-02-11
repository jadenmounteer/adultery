import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ExercisesService } from 'src/app/services/exercises-service';
import { Exercise } from 'src/app/types/exercise';
import { AuthService } from '../auth/auth.service';

// This component is inspired by NGB's docs: https://ng-bootstrap.github.io/#/components/modal/examples
@Component({
  selector: 'app-add-exercise-modal',
  templateUrl: './add-exercise-modal.component.html',
  styleUrls: ['./add-exercise-modal.component.scss'],
})
export class AddExerciseModalComponent {
  @Input() name!: string;

  constructor(
    public activeModal: NgbActiveModal,
    private exercisesService: ExercisesService,
    public authService: AuthService
  ) {}

  public onSubmit(form: NgForm) {
    const newExercise: Exercise = {
      userId: this.authService.userId,
      defaultExercise: false,
      exerciseImage: null,
      name: form.value.exerciseName,
      description: form.value.exerciseDescription,
      defaultTags: null,
    };

    this.exercisesService.addNewExercise(newExercise);
    this.activeModal.close('Close click');
  }
}
