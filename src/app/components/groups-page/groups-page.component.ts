import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { GroupService } from 'src/app/services/groups-service';
import { Group } from 'src/app/types/group';
import { AddOrEditGroupModalComponent } from '../add-group-modal/add-or-edit-group-modal.component';

@Component({
  selector: 'app-groups-page',
  templateUrl: './groups-page.component.html',
  styleUrls: ['./groups-page.component.scss'],
})
export class GroupsPageComponent implements OnInit {
  private groupsSubscription!: Subscription;
  protected contentLoaded: boolean = true;
  protected groups: Array<Group> = [];
  constructor(
    private modalService: NgbModal,
    private groupService: GroupService
  ) {}

  ngOnInit(): void {
    this.groupsSubscription = this.groupService.groupsChanged.subscribe(
      (groups) => {
        this.groups = groups;
        this.contentLoaded = true;
      }
    );
    this.groupService.fetchGroups();
  }

  protected addNewGroup() {
    const modalRef = this.modalService.open(AddOrEditGroupModalComponent);
  }
}
