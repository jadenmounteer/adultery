import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../auth/auth.service';
import { ShoppingList } from '../shopping-list-types/shopping-list';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-add-shopping-list-modal',
  templateUrl: './add-shopping-list-modal.component.html',
  styleUrls: ['./add-shopping-list-modal.component.scss'],
})
export class AddShoppingListModalComponent implements OnInit {
  constructor(
    public activeModal: NgbActiveModal,
    public authService: AuthService,
    public shoppingListService: ShoppingListService
  ) {}

  ngOnInit(): void {}

  public onSubmit(form: NgForm) {
    console.log(this.authService.userId);
    console.log(form);
    const newShoppingList: ShoppingList = {
      id: '',
      userId: this.authService.userId,
      listName: form.value.name,
      // complete: false,
      // items: null,
    };
    this.shoppingListService.addNewShoppingList(newShoppingList);
    this.activeModal.close('Close click');
  }
}
