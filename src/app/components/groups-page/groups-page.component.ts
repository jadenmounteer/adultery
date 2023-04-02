import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddOrEditGroupModalComponent } from '../add-group-modal/add-or-edit-group-modal.component';

@Component({
  selector: 'app-groups-page',
  templateUrl: './groups-page.component.html',
  styleUrls: ['./groups-page.component.scss'],
})
export class GroupsPageComponent implements OnInit {
  protected contentLoaded: boolean = true;
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  protected addNewGroup() {
    const modalRef = this.modalService.open(AddOrEditGroupModalComponent);
  }
}
