import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise-tag',
  templateUrl: './exercise-tag.component.html',
  styleUrls: ['./exercise-tag.component.scss'],
})
export class ExerciseTagComponent implements OnInit {
  @Input() tag!: string;

  constructor() {}

  ngOnInit(): void {}
}
