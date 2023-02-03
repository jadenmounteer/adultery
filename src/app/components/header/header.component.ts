import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/types/user';
import { IconService } from 'src/app/services/icon.service';

// This component is inspired by the Responsive navbar here: https://ng-bootstrap.github.io/#/components/collapse/examples

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input()
  user!: User;

  protected isMenuCollapsed: boolean = true;

  constructor(public icon: IconService) {}

  ngOnInit(): void {}
}
