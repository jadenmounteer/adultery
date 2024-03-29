import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListRoutingModule } from './shopping-list-routing.module';
import { ShoppingListPageComponent } from './shopping-list-page/shopping-list-page.component';
import { UISharedModule } from '../ui-shared-module/ui-shared-module.module';
import { AuthModule } from '../auth/auth.module';
import { AddShoppingListModalComponent } from './add-shopping-list-modal/add-shopping-list-modal.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListItemModalComponent } from './shopping-list-item-modal/shopping-list-item-modal.component';

@NgModule({
  declarations: [ShoppingListPageComponent, AddShoppingListModalComponent, ShoppingListComponent, ShoppingListItemModalComponent],
  imports: [
    CommonModule,
    ShoppingListRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    UISharedModule,
    AuthModule,
  ],
})
export class ShoppingListModule {}
