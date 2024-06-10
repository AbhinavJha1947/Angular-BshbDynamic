import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSubnoticeComponent } from './header-subnotice.component';

describe('HeaderSubnoticeComponent', () => {
  let component: HeaderSubnoticeComponent;
  let fixture: ComponentFixture<HeaderSubnoticeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderSubnoticeComponent]
    });
    fixture = TestBed.createComponent(HeaderSubnoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
