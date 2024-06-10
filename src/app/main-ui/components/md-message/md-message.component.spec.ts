import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdMessageComponent } from './md-message.component';

describe('MdMessageComponent', () => {
  let component: MdMessageComponent;
  let fixture: ComponentFixture<MdMessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MdMessageComponent]
    });
    fixture = TestBed.createComponent(MdMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
