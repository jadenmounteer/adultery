import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFitnessLogModalComponent } from './add-fitness-log-modal.component';

describe('AddFitnessLogModalComponent', () => {
  let component: AddFitnessLogModalComponent;
  let fixture: ComponentFixture<AddFitnessLogModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFitnessLogModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFitnessLogModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
