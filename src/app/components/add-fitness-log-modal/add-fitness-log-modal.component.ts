import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-fitness-log-modal',
  templateUrl: './add-fitness-log-modal.component.html',
  styleUrls: ['./add-fitness-log-modal.component.scss'],
})
export class AddFitnessLogModalComponent implements OnInit {
  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {}
}
