import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureComingSoonComponent } from './feature-coming-soon.component';

describe('FeatureComingSoonComponent', () => {
  let component: FeatureComingSoonComponent;
  let fixture: ComponentFixture<FeatureComingSoonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureComingSoonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureComingSoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
