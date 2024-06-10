import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActsAndRulesComponent } from './acts-and-rules.component';

describe('ActsAndRulesComponent', () => {
  let component: ActsAndRulesComponent;
  let fixture: ComponentFixture<ActsAndRulesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActsAndRulesComponent]
    });
    fixture = TestBed.createComponent(ActsAndRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
