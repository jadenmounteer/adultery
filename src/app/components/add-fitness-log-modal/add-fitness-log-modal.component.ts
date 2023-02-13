import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FitnessLogsService } from 'src/app/services/fitness-logs.service';
import { Exercise } from 'src/app/types/exercise';
import { FitnessLog } from 'src/app/types/exercise-log';
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
    private authService: AuthService,
    private fitnessLogsService: FitnessLogsService
  ) {}

  ngOnInit(): void {}

  public onSubmit(form: NgForm) {
    const logDescription = form.value.logDescription;
    const today = this.getDate();
    const newLog: FitnessLog = {
      id: '',
      date: today,
      text: logDescription,
      userId: this.authService.userId,
      parentId: this.parentItem.id,
    };

    this.fitnessLogsService.addNewLog(newLog);
    this.activeModal.close('Close click');
  }

  private getDate() {
    return new Date();
  }
}
