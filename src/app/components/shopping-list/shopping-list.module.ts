import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListRoutingModule } from './shopping-list-routing.module';
import { ShoppingListPageComponent } from './shopping-list-page/shopping-list-page.component';
import { UISharedModule } from '../ui-shared-module/ui-shared-module.module';
import { AuthModule } from '../auth/auth.module';
import { AddShoppingListModalComponent } from './add-shopping-list-modal/add-shopping-list-modal.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [ShoppingListPageComponent, AddShoppingListModalComponent],
  imports: [
    CommonModule,
    ShoppingListRoutingModule,
    UISharedModule,
    AuthModule,
    FormsModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
})
export class ShoppingListModule {}
