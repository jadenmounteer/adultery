import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GroupService } from 'src/app/services/groups-service';
import { AddOrEditGroupModalComponent } from '../add-group-modal/add-or-edit-group-modal.component';

@Component({
  selector: 'app-groups-page',
  templateUrl: './groups-page.component.html',
  styleUrls: ['./groups-page.component.scss'],
})
export class GroupsPageComponent implements OnInit {
  protected contentLoaded: boolean = true;
  constructor(
    private modalService: NgbModal,
    private groupsService: GroupService
  ) {}

  ngOnInit(): void {
    this.groupsService.fetchGroups();
  }

  protected addNewGroup() {
    const modalRef = this.modalService.open(AddOrEditGroupModalComponent);
  }
}
