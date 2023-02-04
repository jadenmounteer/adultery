import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { IconService } from 'src/app/services/icon.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

// This component is inspired by the Responsive navbar here: https://ng-bootstrap.github.io/#/components/collapse/examples

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  public isAuth: boolean = false;
  private authSubscription!: Subscription;

  protected isMenuCollapsed: boolean = true;

  constructor(public icon: IconService, public authService: AuthService) {}

  ngOnInit(): void {
    this.authSubscription = this.authService.authChange.subscribe(
      (authStatus) => {
        this.isAuth = authStatus;
      }
    );
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }
}
