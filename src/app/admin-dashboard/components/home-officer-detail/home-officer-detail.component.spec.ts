import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeOfficerDetailComponent } from './home-officer-detail.component';

describe('HomeOfficerDetailComponent', () => {
  let component: HomeOfficerDetailComponent;
  let fixture: ComponentFixture<HomeOfficerDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeOfficerDetailComponent]
    });
    fixture = TestBed.createComponent(HomeOfficerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
