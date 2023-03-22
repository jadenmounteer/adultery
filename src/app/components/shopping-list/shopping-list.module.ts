import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingListRoutingModule } from './shopping-list-routing.module';
import { ShoppingListPageComponent } from './shopping-list-page/shopping-list-page.component';
import { UISharedModule } from '../ui-shared-module/ui-shared-module.module';

@NgModule({
  declarations: [ShoppingListPageComponent],
  imports: [CommonModule, ShoppingListRoutingModule, UISharedModule],
})
export class ShoppingListModule {}
