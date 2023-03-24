import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentWrapperComponent } from './content-wrapper/content-wrapper.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    NgbDropdownModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  declarations: [ContentWrapperComponent, LoadingSpinnerComponent],
  exports: [
    ContentWrapperComponent,
    LoadingSpinnerComponent,
    NgbModule,
    BrowserModule,
    NgbDropdownModule,
  ],
})
export class UISharedModule {}
