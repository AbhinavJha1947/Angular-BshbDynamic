import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentTenderComponent } from './current-tender.component';

describe('CurrentTenderComponent', () => {
  let component: CurrentTenderComponent;
  let fixture: ComponentFixture<CurrentTenderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentTenderComponent]
    });
    fixture = TestBed.createComponent(CurrentTenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
