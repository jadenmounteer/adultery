import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddShoppingListModalComponent } from '../add-shopping-list-modal/add-shopping-list-modal.component';
import { Subscription } from 'rxjs';
import { ShoppingList } from '../shopping-list-types/shopping-list';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-page',
  templateUrl: './shopping-list-page.component.html',
  styleUrls: ['./shopping-list-page.component.scss'],
})
export class ShoppingListPageComponent implements OnInit {
  public contentLoaded: boolean = false;
  private shoppingListsSubscription!: Subscription;
  public shoppingLists: Array<ShoppingList> = [];

  constructor(
    private modalService: NgbModal,
    private shoppingListService: ShoppingListService
  ) {}

  ngOnInit(): void {
    this.shoppingListsSubscription =
      this.shoppingListService.shoppingListsChanged.subscribe(
        (shoppingLists) => {
          this.shoppingLists = shoppingLists;
          this.contentLoaded = true;
        }
      );
    this.shoppingListService.fetchShoppingLists();
  }

  protected onAddShoppingList() {
    const modalRef = this.modalService.open(AddShoppingListModalComponent);
  }
}
