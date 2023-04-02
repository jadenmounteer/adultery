import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Group } from 'src/app/types/group';

@Component({
  selector: 'app-add-or-edit-group-modal',
  templateUrl: './add-or-edit-group-modal.component.html',
  styleUrls: ['./add-or-edit-group-modal.component.scss'],
})
export class AddOrEditGroupModalComponent implements OnInit {
  @Input() groupToEdit!: Group;
  protected groupModel: Group = {
    id: '',
    groupName: null,
    users: [],
  };

  constructor(public activeModal: NgbActiveModal) {
    if (this.groupToEdit) {
      this.groupModel = { ...this.groupToEdit };
    }
  }

  ngOnInit(): void {}

  public onSubmit(form: NgForm) {
    // this.exercisesService.addNewExercise(newExercise);
    this.activeModal.close('Close click');
  }
}
