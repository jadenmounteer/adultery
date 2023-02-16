import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { FitnessLogsService } from 'src/app/services/fitness-logs.service';
import { IconService } from 'src/app/services/icon.service';
import { Exercise } from 'src/app/types/exercise';
import { FitnessLog } from 'src/app/types/exercise-log';
import { AddFitnessLogModalComponent } from '../add-fitness-log-modal/add-fitness-log-modal.component';

@Component({
  selector: 'app-fitness-logs',
  templateUrl: './fitness-logs.component.html',
  styleUrls: ['./fitness-logs.component.scss'],
})
export class FitnessLogsComponent implements OnInit, OnDestroy {
  @Input() parentItem!: Exercise;
  private fitnessLogsSubscription!: Subscription;
  public fitnessLogs: Array<FitnessLog> = [];
  public fitnessLogsLoaded: boolean = false;

  constructor(
    public icon: IconService,
    private modalService: NgbModal,
    private fitnessLogsService: FitnessLogsService
  ) {}

  ngOnInit(): void {
    this.fitnessLogsSubscription =
      this.fitnessLogsService.fitnessLogsChanged.subscribe(
        (fitnessLogs: FitnessLog[]) => {
          this.fitnessLogs = fitnessLogs;
          this.fitnessLogsLoaded = true;
        }
      );
    this.fitnessLogsService.fetchLogs(this.parentItem.id);
  }

  ngOnDestroy(): void {
    this.fitnessLogsSubscription.unsubscribe();
  }

  onClickAddLog() {
    const modalRef = this.modalService.open(AddFitnessLogModalComponent);
    modalRef.componentInstance.parentItem = this.parentItem;
    console.log(this.fitnessLogsService.fitnessLogs);
  }
}
