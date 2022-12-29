import { Component, OnInit } from '@angular/core';

import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  faDumbbell = faDumbbell;

  constructor() {}

  ngOnInit(): void {}
}
