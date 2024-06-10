import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficerListComponent } from './officer-list.component';

describe('OfficerListComponent', () => {
  let component: OfficerListComponent;
  let fixture: ComponentFixture<OfficerListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OfficerListComponent]
    });
    fixture = TestBed.createComponent(OfficerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
