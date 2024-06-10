import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamadhanInchargeLoginComponent } from './samadhan-incharge-login.component';

describe('SamadhanInchargeLoginComponent', () => {
  let component: SamadhanInchargeLoginComponent;
  let fixture: ComponentFixture<SamadhanInchargeLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SamadhanInchargeLoginComponent]
    });
    fixture = TestBed.createComponent(SamadhanInchargeLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
