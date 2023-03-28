import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './components/auth/auth.guard';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { FeatureComingSoonComponent } from './components/feature-coming-soon/feature-coming-soon.component';
import { ExerciseLibraryComponent } from './components/fitness/exercise-library/exercise-library.component';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'exercise-library',
    component: ExerciseLibraryComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'coming-soon',
    component: FeatureComingSoonComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'shopping-list-page',
    loadChildren: () =>
      import('./components/shopping-list/shopping-list.module').then(
        (m) => m.ShoppingListModule
      ),
  },
  {
    path: 'shopping-list-page/shopping-list/:shopping-list-id',
    loadChildren: () =>
      import('./components/shopping-list/shopping-list.module').then(
        (m) => m.ShoppingListModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}
