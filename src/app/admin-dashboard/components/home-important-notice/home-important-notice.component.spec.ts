import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeImportantNoticeComponent } from './home-important-notice.component';

describe('HomeImportantNoticeComponent', () => {
  let component: HomeImportantNoticeComponent;
  let fixture: ComponentFixture<HomeImportantNoticeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeImportantNoticeComponent]
    });
    fixture = TestBed.createComponent(HomeImportantNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
