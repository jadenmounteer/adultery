import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentWrapperComponent } from './content-wrapper/content-wrapper.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ContentWrapperComponent, LoadingSpinnerComponent],
  exports: [ContentWrapperComponent, LoadingSpinnerComponent],
})
export class UISharedModule {}
