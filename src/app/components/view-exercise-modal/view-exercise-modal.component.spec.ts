import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewExerciseModalComponent } from './view-exercise-modal.component';

describe('ViewExerciseModalComponent', () => {
  let component: ViewExerciseModalComponent;
  let fixture: ComponentFixture<ViewExerciseModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewExerciseModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewExerciseModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
