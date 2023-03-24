import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShoppingList } from '../shopping-list-types/shopping-list';
import { ShoppingListService } from '../shopping-list.service';

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
    private shoppingListService: ShoppingListService
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
}
