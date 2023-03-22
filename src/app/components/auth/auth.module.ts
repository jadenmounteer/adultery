import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { GoogleButtonComponent } from './google-button/google-button.component';
import { AuthService } from './auth.service';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [LoginComponent, SignupComponent, GoogleButtonComponent],
  providers: [AuthService],
  exports: [LoginComponent, SignupComponent],
})
export class AuthModule {}
