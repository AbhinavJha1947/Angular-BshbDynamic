import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrativeLoginComponent } from './administrative-login.component';

describe('AdministrativeLoginComponent', () => {
  let component: AdministrativeLoginComponent;
  let fixture: ComponentFixture<AdministrativeLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdministrativeLoginComponent]
    });
    fixture = TestBed.createComponent(AdministrativeLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
