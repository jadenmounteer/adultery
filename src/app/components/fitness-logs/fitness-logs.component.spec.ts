import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnessLogsComponent } from './fitness-logs.component';

describe('FitnessLogsComponent', () => {
  let component: FitnessLogsComponent;
  let fixture: ComponentFixture<FitnessLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FitnessLogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FitnessLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
