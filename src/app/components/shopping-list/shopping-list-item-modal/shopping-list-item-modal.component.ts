import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ShoppingListItem } from '../shopping-list-types/shopping-list-item';

@Component({
  selector: 'app-shopping-list-item-modal',
  templateUrl: './shopping-list-item-modal.component.html',
  styleUrls: ['./shopping-list-item-modal.component.scss'],
})
export class ShoppingListItemModalComponent implements OnInit {
  @Input() message!: string;
  @Input() shoppingListItemToEdit!: ShoppingListItem;

  // TODO initialize the item, if there is one, or start with a blank item
  protected shoppingListItem: ShoppingListItem = {
    id: '',
    userId: undefined,
    itemName: '',
    estimatedPrice: undefined,
    quantityNeeded: undefined,
    department: '',
    purchased: false,
  };

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
    if (this.shoppingListItemToEdit) {
      this.shoppingListItem = this.shoppingListItemToEdit;
    }
  }

  onSubmit(form: NgForm) {}
}
