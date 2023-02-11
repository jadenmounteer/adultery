import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IconService } from 'src/app/services/icon.service';
import { Exercise } from 'src/app/types/exercise';
import { EditExerciseModalComponent } from '../edit-exercise-modal/edit-exercise-modal.component';

@Component({
  selector: 'app-exercise-library-item',
  templateUrl: './exercise-library-item.component.html',
  styleUrls: ['./exercise-library-item.component.scss'],
})
export class ExerciseLibraryItemComponent implements OnInit {
  @Input() exercise!: Exercise;

  constructor(public icon: IconService, private modalService: NgbModal) {}

  ngOnInit(): void {}

  public onClickEditButton() {
    const modalRef = this.modalService.open(EditExerciseModalComponent);
    modalRef.componentInstance.exerciseToEdit = this.exercise;
  }
}
