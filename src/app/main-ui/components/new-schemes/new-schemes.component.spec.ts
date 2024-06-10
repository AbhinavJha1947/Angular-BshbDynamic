import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSchemesComponent } from './new-schemes.component';

describe('NewSchemesComponent', () => {
  let component: NewSchemesComponent;
  let fixture: ComponentFixture<NewSchemesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewSchemesComponent]
    });
    fixture = TestBed.createComponent(NewSchemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
