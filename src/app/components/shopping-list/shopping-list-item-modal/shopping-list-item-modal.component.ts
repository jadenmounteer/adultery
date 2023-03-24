import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-shopping-list-item-modal',
  templateUrl: './shopping-list-item-modal.component.html',
  styleUrls: ['./shopping-list-item-modal.component.scss'],
})
export class ShoppingListItemModalComponent implements OnInit {
  @Input() message!: string;
  protected departmentKeys: string[] = [];

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {}
}
