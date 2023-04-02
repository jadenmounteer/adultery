import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { GroupService } from 'src/app/services/groups-service';
import { Group } from 'src/app/types/group';
import { AuthService } from '../auth/auth.service';

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
    userIds: [this.authService.userId],
  };

  constructor(
    public activeModal: NgbActiveModal,
    private groupService: GroupService,
    public authService: AuthService
  ) {
    if (this.groupToEdit) {
      this.groupModel = { ...this.groupToEdit };
    }
  }

  ngOnInit(): void {}

  public onSubmit(form: NgForm) {
    this.groupService.addNewGroup(this.groupModel);
    this.activeModal.close('Close click');
  }
}
