import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseTagComponent } from './exercise-tag.component';

describe('ExerciseTagComponent', () => {
  let component: ExerciseTagComponent;
  let fixture: ComponentFixture<ExerciseTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciseTagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExerciseTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
