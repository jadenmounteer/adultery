import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddShoppingListModalComponent } from '../add-shopping-list-modal/add-shopping-list-modal.component';
import { Subscription } from 'rxjs';
import { ShoppingList } from '../shopping-list-types/shopping-list';
import { ShoppingListService } from '../shopping-list.service';
import { ConfirmModalComponent } from '../../confirm-modal/confirm-modal.component';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

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
    private shoppingListService: ShoppingListService,
    private router: Router
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

  protected onDeleteShoppingList(shoppingListToDelete: ShoppingList) {
    const modalRef = this.modalService.open(ConfirmModalComponent);
    modalRef.componentInstance.message = `Are you sure you want to delete the ${shoppingListToDelete.listName} shopping list?`;
    modalRef.result.then((result) => {
      if (result === 'Yes') {
        this.shoppingListService.deleteShoppingList(shoppingListToDelete);
        // this.activeModal.close('Close click');
      }
    });
  }

  protected openShoppingList(shoppingList: ShoppingList) {
    this.router.navigate(['shopping-list-page/shopping-list']);
  }
}
