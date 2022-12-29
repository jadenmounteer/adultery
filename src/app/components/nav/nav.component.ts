import { Component, OnInit } from '@angular/core';
import { IconService } from 'src/app/services/icon.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  constructor(public icon: IconService) {}

  ngOnInit(): void {}
}
