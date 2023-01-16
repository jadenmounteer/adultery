import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

// This component is inspired by this blog: https://dev.to/riapacheco/adding-animated-illustrations-to-an-angular-app-with-lottie-ngx-lottie-4j0o
// To install the necessary packages, I ran: npm install lottie-web ngx-lottie@9

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss'],
})
export class AnimationComponent {
  @Input() options: AnimationOptions = {
    // I can place a default animation here
    path: '',
  };

  @Output() animationCreated = new EventEmitter();

  constructor() {}

  // This is the component function that binds to the animationCreated event from the package
  onAnimate(animationItem: AnimationItem): void {
    console.log(animationItem);
    this.animationCreated.emit(animationItem);
  }
}
