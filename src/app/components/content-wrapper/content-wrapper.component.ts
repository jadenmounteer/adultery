import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-wrapper',
  templateUrl: './content-wrapper.component.html',
  styleUrls: ['./content-wrapper.component.scss'],
})
export class ContentWrapperComponent implements OnInit {
  @Input() contentLoaded: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
