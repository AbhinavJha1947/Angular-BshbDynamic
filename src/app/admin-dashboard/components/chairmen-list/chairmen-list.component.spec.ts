import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChairmenListComponent } from './chairmen-list.component';

describe('ChairmenListComponent', () => {
  let component: ChairmenListComponent;
  let fixture: ComponentFixture<ChairmenListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChairmenListComponent]
    });
    fixture = TestBed.createComponent(ChairmenListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
