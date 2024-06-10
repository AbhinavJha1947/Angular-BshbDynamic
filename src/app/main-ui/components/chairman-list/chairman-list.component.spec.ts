import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChairmanListComponent } from './chairman-list.component';

describe('ChairmanListComponent', () => {
  let component: ChairmanListComponent;
  let fixture: ComponentFixture<ChairmanListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChairmanListComponent]
    });
    fixture = TestBed.createComponent(ChairmanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
