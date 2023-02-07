import { Component, Input, OnInit } from '@angular/core';
import { Exercise } from 'src/app/types/exercise';

@Component({
  selector: 'app-exercise-library-item',
  templateUrl: './exercise-library-item.component.html',
  styleUrls: ['./exercise-library-item.component.scss'],
})
export class ExerciseLibraryItemComponent implements OnInit {
  @Input() exercise!: Exercise;

  constructor() {}

  ngOnInit(): void {}
}
