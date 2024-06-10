import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionOfficerLoginComponent } from './section-officer-login.component';

describe('SectionOfficerLoginComponent', () => {
  let component: SectionOfficerLoginComponent;
  let fixture: ComponentFixture<SectionOfficerLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionOfficerLoginComponent]
    });
    fixture = TestBed.createComponent(SectionOfficerLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
