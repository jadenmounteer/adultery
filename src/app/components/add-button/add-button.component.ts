import { Component, OnInit } from '@angular/core';
import { IconService } from 'src/app/services/icon.service';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.scss'],
})
export class AddButtonComponent implements OnInit {
  constructor(public icon: IconService) {}

  ngOnInit(): void {}
}
