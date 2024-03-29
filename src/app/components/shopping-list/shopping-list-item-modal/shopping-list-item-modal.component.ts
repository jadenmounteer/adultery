import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ShoppingList } from '../shopping-list-types/shopping-list';
import { ShoppingListItem } from '../shopping-list-types/shopping-list-item';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-item-modal',
  templateUrl: './shopping-list-item-modal.component.html',
  styleUrls: ['./shopping-list-item-modal.component.scss'],
})
export class ShoppingListItemModalComponent implements OnInit {
  @Input() message!: string;
  @Input() shoppingListItemToEdit!: ShoppingListItem;
  @Input() shoppingListId!: string;
  @Input() indexOfItemToUpdate!: number;

  // TODO initialize the item, if there is one, or start with a blank item
  protected shoppingListItem: ShoppingListItem = {
    shoppingListId: '',
    itemName: '',
    estimatedPrice: 2,
    quantityNeeded: 1,
    department: '',
    purchased: false,
  };

  constructor(
    public activeModal: NgbActiveModal,
    private shoppingListService: ShoppingListService
  ) {}

  ngOnInit(): void {
    if (this.shoppingListItemToEdit) {
      this.shoppingListItem = { ...this.shoppingListItemToEdit };
    }
    this.shoppingListItem.shoppingListId = this.shoppingListId;
  }

  onSubmit() {
    if (this.shoppingListItemToEdit) {
      this.editItem();
    } else {
      this.addItem();
    }

    this.activeModal.close('Close click');
  }

  private editItem() {
    const shoppingListToEdit: ShoppingList | undefined =
      this.shoppingListService.getShoppingList(this.shoppingListId);

    if (shoppingListToEdit) {
      if (shoppingListToEdit.items) {
        shoppingListToEdit.items[this.indexOfItemToUpdate] =
          this.shoppingListItem;
        this.shoppingListService.updateShoppingList(shoppingListToEdit);
      }
    }
  }

  private addItem() {
    this.shoppingListService.addItemToShoppingList(this.shoppingListItem);
  }
}
