import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { PageWrapperComponent } from './components/page-wrapper/page-wrapper.component';
import { QuotesComponent } from './components/quotes/quotes.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { QuotesService } from './services/quotes.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PageWrapperComponent,
    QuotesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  providers: [QuotesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
