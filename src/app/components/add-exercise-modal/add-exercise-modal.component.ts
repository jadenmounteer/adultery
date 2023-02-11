import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

// This component is inspired by NGB's docs: https://ng-bootstrap.github.io/#/components/modal/examples
@Component({
  selector: 'app-add-exercise-modal',
  templateUrl: './add-exercise-modal.component.html',
  styleUrls: ['./add-exercise-modal.component.scss'],
})
export class AddExerciseModalComponent implements OnInit {
  @Input() name!: string;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {}

  public onSubmit(form: NgForm) {
    console.log('Submitted form');
    this.activeModal.close('Close click');
  }
}
