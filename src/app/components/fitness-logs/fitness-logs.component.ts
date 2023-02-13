import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IconService } from 'src/app/services/icon.service';
import { Exercise } from 'src/app/types/exercise';
import { AddFitnessLogModalComponent } from '../add-fitness-log-modal/add-fitness-log-modal.component';

@Component({
  selector: 'app-fitness-logs',
  templateUrl: './fitness-logs.component.html',
  styleUrls: ['./fitness-logs.component.scss'],
})
export class FitnessLogsComponent implements OnInit {
  @Input() parentItem!: Exercise;

  constructor(public icon: IconService, private modalService: NgbModal) {}

  ngOnInit(): void {}

  onClickAddLog() {
    const modalRef = this.modalService.open(AddFitnessLogModalComponent);
    modalRef.componentInstance.parentItem = this.parentItem;
  }
}
