import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldSchemesComponent } from './old-schemes.component';

describe('OldSchemesComponent', () => {
  let component: OldSchemesComponent;
  let fixture: ComponentFixture<OldSchemesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OldSchemesComponent]
    });
    fixture = TestBed.createComponent(OldSchemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
