import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Exercise } from 'src/app/types/exercise';

@Component({
  selector: 'app-add-fitness-log-modal',
  templateUrl: './add-fitness-log-modal.component.html',
  styleUrls: ['./add-fitness-log-modal.component.scss'],
})
export class AddFitnessLogModalComponent implements OnInit {
  @Input() parentItem!: Exercise;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {}
}
