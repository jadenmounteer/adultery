import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShoppingListItemModalComponent } from '../shopping-list-item-modal/shopping-list-item-modal.component';
import { ShoppingList } from '../shopping-list-types/shopping-list';
import { ShoppingListService } from '../shopping-list.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { ShoppingListItem } from '../shopping-list-types/shopping-list-item';
import { IconService } from 'src/app/services/icon.service';
import { Router } from '@angular/router';

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
    private modalService: NgbModal,
    public icon: IconService,
    private router: Router
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
        this.shoppingListService.fetchShoppingList(id);
        this.contentLoaded = true;
      }

      // We need to fetch it from the database.
      // TODO before we can do this, we need to make sure the owner marks it as shareable. When they do that, I need to update the id of the
      // shopping list in the db.
      this.shoppingListsSubscription =
        this.shoppingListService.shoppingListsChanged.subscribe(
          (updatedShoppingLists) => {
            this.shoppingLists = updatedShoppingLists;

            // Set shoppingList to the updated list
            let indexOfShoppingListWeAreWorkingWith: number = 0;
            updatedShoppingLists.forEach((list) => {
              if (list.id === this.shoppingList.id) {
                indexOfShoppingListWeAreWorkingWith =
                  updatedShoppingLists.indexOf(list);
              }
            });

            this.shoppingList =
              updatedShoppingLists[indexOfShoppingListWeAreWorkingWith];
          }
        );
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

  protected deleteItemFromShoppingList(
    shoppingListItem: ShoppingListItem,
    index: number,
    shoppingList: ShoppingList
  ) {
    if (shoppingList.items) {
      shoppingList.items = shoppingList.items.filter((item) => {
        return shoppingList?.items?.indexOf(item) !== index;
      });

      this.changeShoppingListItem(shoppingListItem);
      return;
    }
  }

  protected onClickBackButton() {
    this.router.navigate([`shopping-list-page/`]);
  }

  ngOnDestroy(): void {
    if (this.shoppingListsSubscription) {
      this.shoppingListsSubscription.unsubscribe();
    }
  }
}
