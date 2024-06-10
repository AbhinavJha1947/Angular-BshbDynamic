import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubNoticesComponent } from './sub-notices.component';

describe('SubNoticesComponent', () => {
  let component: SubNoticesComponent;
  let fixture: ComponentFixture<SubNoticesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubNoticesComponent]
    });
    fixture = TestBed.createComponent(SubNoticesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
