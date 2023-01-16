import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  public homePageAnimation: AnimationOptions = {
    path: 'https://assets1.lottiefiles.com/private_files/lf30_x8jhuhr4.json',
  };
  constructor() {}

  ngOnInit(): void {}
}
