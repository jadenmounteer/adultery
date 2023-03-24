import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListItemModalComponent } from './shopping-list-item-modal.component';

describe('ShoppingListItemModalComponent', () => {
  let component: ShoppingListItemModalComponent;
  let fixture: ComponentFixture<ShoppingListItemModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingListItemModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingListItemModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
