import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Exercise } from 'src/app/types/exercise';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-add-fitness-log-modal',
  templateUrl: './add-fitness-log-modal.component.html',
  styleUrls: ['./add-fitness-log-modal.component.scss'],
})
export class AddFitnessLogModalComponent implements OnInit {
  @Input() parentItem!: Exercise;

  constructor(
    public activeModal: NgbActiveModal,
    public authService: AuthService
  ) {}

  ngOnInit(): void {}

  public onSubmit(form: NgForm) {
    const logDescription = form.value.logDescription;
    // const newExercise: Exercise = {
    //   id: '',
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

  private getDate() {}
}
