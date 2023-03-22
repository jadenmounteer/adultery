import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddShoppingListModalComponent } from './add-shopping-list-modal.component';

describe('AddShoppingListModalComponent', () => {
  let component: AddShoppingListModalComponent;
  let fixture: ComponentFixture<AddShoppingListModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddShoppingListModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddShoppingListModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
