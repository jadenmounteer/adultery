import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  public homePageAnimation: AnimationOptions = {
    path: '/assets/lottie/hero-on-its-way.json',
  };
  constructor() {}

  ngOnInit(): void {}
}
