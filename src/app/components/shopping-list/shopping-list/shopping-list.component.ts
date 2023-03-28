import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShoppingListItemModalComponent } from '../shopping-list-item-modal/shopping-list-item-modal.component';
import { ShoppingList } from '../shopping-list-types/shopping-list';
import { ShoppingListService } from '../shopping-list.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { ShoppingListItem } from '../shopping-list-types/shopping-list-item';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  protected shoppingList!: ShoppingList;
  protected contentLoaded: boolean = false;
  private shoppingListsSubscription!: Subscription;
  public shoppingLists: Array<ShoppingList> = [];

  constructor(
    private route: ActivatedRoute,
    private shoppingListService: ShoppingListService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let id = String(params.get('id'));

      const shoppingList: ShoppingList | undefined =
        this.shoppingListService.getShoppingList(id);
      if (shoppingList) {
        this.shoppingList = shoppingList;
        this.contentLoaded = true;
      } else {
        // We need to fetch it from the database.
        // TODO before we can do this, we need to make sure the owner marks it as shareable. When they do that, I need to update the id of the
        // shopping list in the db.
        this.shoppingListsSubscription =
          this.shoppingListService.shoppingListsChanged.subscribe(
            (shoppingLists) => {
              this.shoppingLists = shoppingLists;
              this.contentLoaded = true;
            }
          );
        this.shoppingListService.fetchShoppingList(id);
      }
    });
  }

  protected addShoppingListItem() {
    const modalRef = this.modalService.open(ShoppingListItemModalComponent);
    modalRef.componentInstance.shoppingListId = this.shoppingList.id;
    modalRef.componentInstance.message = `Add new item to ${this.shoppingList.listName}`;
    modalRef.result.then((result) => {
      if (result === 'Yes') {
      }
    });
  }

  protected toggleCheckbox(shoppingListItem: ShoppingListItem) {
    shoppingListItem.purchased = !shoppingListItem.purchased;
    this.changeShoppingListItem(shoppingListItem);
  }

  private changeShoppingListItem(shoppingListItem: ShoppingListItem) {
    const shoppingListToEdit: ShoppingList | undefined =
      this.shoppingListService.getShoppingList(shoppingListItem.shoppingListId);

    if (shoppingListToEdit) {
      this.shoppingListService.updateShoppingList(shoppingListToEdit);
      return;
    }

    throw new Error(
      'Could not find a shopping list for this shopping list item.'
    );
  }

  ngOnDestroy(): void {
    if (this.shoppingListsSubscription) {
      this.shoppingListsSubscription.unsubscribe();
    }
  }
}
