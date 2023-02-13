import { Component, OnInit } from '@angular/core';
import { IconService } from 'src/app/services/icon.service';

@Component({
  selector: 'app-fitness-logs',
  templateUrl: './fitness-logs.component.html',
  styleUrls: ['./fitness-logs.component.scss'],
})
export class FitnessLogsComponent implements OnInit {
  constructor(public icon: IconService) {}

  ngOnInit(): void {}
}
