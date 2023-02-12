import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ExercisesService } from 'src/app/services/exercises-service';
import { Exercise } from 'src/app/types/exercise';
import { AuthService } from '../auth/auth.service';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-edit-exercise-modal',
  templateUrl: './edit-exercise-modal.component.html',
  styleUrls: ['./edit-exercise-modal.component.scss'],
})
export class EditExerciseModalComponent {
  @Input() exerciseToEdit!: Exercise;

  constructor(
    public activeModal: NgbActiveModal,
    private exercisesService: ExercisesService,
    public authService: AuthService,
    private modalService: NgbModal
  ) {}

  public onSubmit(form: NgForm) {
    const updatedExercise: Exercise = {
      id: this.exerciseToEdit.id,
      userId: this.authService.userId,
      defaultExercise: false,
      exerciseImage: null,
      name: form.value.exerciseName,
      description: form.value.exerciseDescription,
      defaultTags: null,
    };
    this.exercisesService.updateExercise(updatedExercise);
    this.activeModal.close('Close click');
  }

  public onDelete() {
    const modalRef = this.modalService.open(ConfirmModalComponent);
    modalRef.componentInstance.message = `Are you sure you want to delete ${this.exerciseToEdit.name}?`;
    modalRef.result.then((result) => {
      if (result === 'Yes') {
        this.exercisesService.deleteExercise(this.exerciseToEdit);
        this.activeModal.close('Close click');
      }
    });
  }
}
