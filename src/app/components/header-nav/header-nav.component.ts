import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/types/user';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

// This component is inspired by the Responsive navbar here: https://ng-bootstrap.github.io/#/components/collapse/examples
@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss'],
})
export class HeaderNavComponent implements OnInit {
  @Input()
  user!: User;

  protected isMenuCollapsed: boolean = true;

  constructor() {}

  ngOnInit(): void {}
}
