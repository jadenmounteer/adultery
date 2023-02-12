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
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AnimationComponent } from './components/animation/animation.component';
import { LottieModule } from 'ngx-lottie';
import { HeaderComponent } from './components/header/header.component';
import { NgbModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { AuthService } from './components/auth/auth.service';
import { FormsModule } from '@angular/forms';
import { ExerciseLibraryComponent } from './components/fitness/exercise-library/exercise-library.component';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { ExercisesService } from './services/exercises-service';
import { ContentWrapperComponent } from './components/content-wrapper/content-wrapper.component';
import { ExerciseLibraryItemComponent } from './components/exercise-library-item/exercise-library-item.component';
import { ExerciseTagComponent } from './components/exercise-tag/exercise-tag.component';
import { AddButtonComponent } from './components/add-button/add-button.component';
import { AddExerciseModalComponent } from './components/add-exercise-modal/add-exercise-modal.component';
import { EditExerciseModalComponent } from './components/edit-exercise-modal/edit-exercise-modal.component';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';

// TODO This is a function necessary for lottie (is there a better place for this?)
export function playerFactory(): any {
  return import('lottie-web');
}

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PageWrapperComponent,
    QuotesComponent,
    LoadingSpinnerComponent,
    HomePageComponent,
    AnimationComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    ExerciseLibraryComponent,
    ContentWrapperComponent,
    ExerciseLibraryItemComponent,
    ExerciseTagComponent,
    AddButtonComponent,
    AddExerciseModalComponent,
    EditExerciseModalComponent,
    ConfirmModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    LottieModule.forRoot({ player: playerFactory }),
    NgbModule,
    NgbDropdownModule,
    FormsModule,
  ],
  providers: [QuotesService, AuthService, ExercisesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
