import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentWrapperComponent } from './content-wrapper/content-wrapper.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [CommonModule, NgbModule, NgbDropdownModule],
  declarations: [ContentWrapperComponent, LoadingSpinnerComponent],
  exports: [
    ContentWrapperComponent,
    LoadingSpinnerComponent,
    NgbModule,

    NgbDropdownModule,
  ],
})
export class UISharedModule {}
