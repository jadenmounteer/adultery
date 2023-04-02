import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Group } from 'src/app/types/group';

@Component({
  selector: 'app-add-or-edit-group-modal',
  templateUrl: './add-or-edit-group-modal.component.html',
  styleUrls: ['./add-or-edit-group-modal.component.scss'],
})
export class AddOrEditGroupModalComponent implements OnInit {
  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {}

  public onSubmit(form: NgForm) {
    // const group: Group = {
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
}
