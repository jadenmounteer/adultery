import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShoppingListItemModalComponent } from '../shopping-list-item-modal/shopping-list-item-modal.component';
import { ShoppingList } from '../shopping-list-types/shopping-list';
import { ShoppingListService } from '../shopping-list.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  protected shoppingList!: ShoppingList;
  protected contentLoaded: boolean = false;

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
      }
    });
  }

  protected addShoppingListItem() {
    const modalRef = this.modalService.open(ShoppingListItemModalComponent);
    modalRef.componentInstance.message = `Add new item to ${this.shoppingList.listName}`;
    modalRef.result.then((result) => {
      if (result === 'Yes') {
      }
    });
  }
}
