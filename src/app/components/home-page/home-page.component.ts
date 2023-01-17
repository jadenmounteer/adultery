import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  public kidAgainAnimation: AnimationOptions = {
    path: 'https://assets1.lottiefiles.com/private_files/lf30_x8jhuhr4.json',
  };

  public fitnessAnimation: AnimationOptions = {
    path: 'https://assets2.lottiefiles.com/packages/lf20_ju61m9x9.json',
  };

  public timeManagementAnimation: AnimationOptions = {
    path: 'https://assets1.lottiefiles.com/packages/lf20_i7ooqm2q.json',
  };

  public financeAnimation: AnimationOptions = {
    path: 'https://assets2.lottiefiles.com/packages/lf20_qxdztkhq.json',
  };

  constructor() {}

  ngOnInit(): void {}
}
