import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselfooterComponent } from './carouselfooter.component';

describe('CarouselfooterComponent', () => {
  let component: CarouselfooterComponent;
  let fixture: ComponentFixture<CarouselfooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarouselfooterComponent]
    });
    fixture = TestBed.createComponent(CarouselfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
