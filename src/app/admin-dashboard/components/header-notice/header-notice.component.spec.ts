import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderNoticeComponent } from './header-notice.component';

describe('HeaderNoticeComponent', () => {
  let component: HeaderNoticeComponent;
  let fixture: ComponentFixture<HeaderNoticeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderNoticeComponent]
    });
    fixture = TestBed.createComponent(HeaderNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
