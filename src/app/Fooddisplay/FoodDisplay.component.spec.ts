import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodDisplayComponent } from './FoodDisplay.component';

describe('DisplayComponent', () => {
  let component: FoodDisplayComponent;
  let fixture: ComponentFixture<FoodDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
