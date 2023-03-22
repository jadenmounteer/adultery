import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-shopping-list-modal',
  templateUrl: './add-shopping-list-modal.component.html',
  styleUrls: ['./add-shopping-list-modal.component.scss'],
})
export class AddShoppingListModalComponent implements OnInit {
  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {}

  public onSubmit(form: NgForm) {
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
    // this.activeModal.close('Close click');
  }
}
