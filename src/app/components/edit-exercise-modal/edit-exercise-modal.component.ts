import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ExercisesService } from 'src/app/services/exercises-service';
import { Exercise } from 'src/app/types/exercise';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-edit-exercise-modal',
  templateUrl: './edit-exercise-modal.component.html',
  styleUrls: ['./edit-exercise-modal.component.scss'],
})
export class EditExerciseModalComponent implements OnInit {
  @Input() exerciseToEdit!: Exercise;

  constructor(
    public activeModal: NgbActiveModal,
    private exercisesService: ExercisesService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    console.log(this.exerciseToEdit);
  }

  public onSubmit(form: NgForm) {
    console.log(this.exerciseToEdit.id);
    const updatedExercise: Exercise = {
      id: this.exerciseToEdit.id,
      userId: this.authService.userId,
      defaultExercise: false,
      exerciseImage: null,
      name: form.value.exerciseName,
      description: form.value.exerciseDescription,
      defaultTags: null,
    };
    console.log(updatedExercise);
    this.exercisesService.updateExercise(updatedExercise);
    this.activeModal.close('Close click');
  }

  public onDelete() {
    // this.exercisesService.deleteExercise(this.exerciseToEdit);
    // this.activeModal.close('Close click');
  }
}
