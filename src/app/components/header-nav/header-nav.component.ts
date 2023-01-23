import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/types/user';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss'],
})
export class HeaderNavComponent implements OnInit {
  @Input()
  user!: User;
  constructor() {}

  ngOnInit(): void {}
}
