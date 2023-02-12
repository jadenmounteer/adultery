import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Exercise } from 'src/app/types/exercise';

@Component({
  selector: 'app-view-exercise-modal',
  templateUrl: './view-exercise-modal.component.html',
  styleUrls: ['./view-exercise-modal.component.scss'],
})
export class ViewExerciseModalComponent implements OnInit {
  @Input() exercise!: Exercise;
  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {}
}
