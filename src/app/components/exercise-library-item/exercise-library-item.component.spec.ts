import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseLibraryItemComponent } from './exercise-library-item.component';

describe('ExerciseLibraryItemComponent', () => {
  let component: ExerciseLibraryItemComponent;
  let fixture: ComponentFixture<ExerciseLibraryItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciseLibraryItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExerciseLibraryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
