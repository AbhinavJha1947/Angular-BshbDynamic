import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinutesBoardMeetingComponent } from './minutes-board-meeting.component';

describe('MinutesBoardMeetingComponent', () => {
  let component: MinutesBoardMeetingComponent;
  let fixture: ComponentFixture<MinutesBoardMeetingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MinutesBoardMeetingComponent]
    });
    fixture = TestBed.createComponent(MinutesBoardMeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
