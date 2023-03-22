import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddShoppingListModalComponent } from '../add-shopping-list-modal/add-shopping-list-modal.component';

@Component({
  selector: 'app-shopping-list-page',
  templateUrl: './shopping-list-page.component.html',
  styleUrls: ['./shopping-list-page.component.scss'],
})
export class ShoppingListPageComponent implements OnInit {
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  protected onAddShoppingList() {
    const modalRef = this.modalService.open(AddShoppingListModalComponent);
  }
}
