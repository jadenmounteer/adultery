import { Component, Input, OnInit } from '@angular/core';
import { IconService } from 'src/app/services/icon.service';
import { Exercise } from 'src/app/types/exercise';

@Component({
  selector: 'app-exercise-library-item',
  templateUrl: './exercise-library-item.component.html',
  styleUrls: ['./exercise-library-item.component.scss'],
})
export class ExerciseLibraryItemComponent implements OnInit {
  @Input() exercise!: Exercise;

  constructor(public icon: IconService) {}

  ngOnInit(): void {}
}
