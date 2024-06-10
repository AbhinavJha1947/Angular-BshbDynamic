import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterHotlinkComponent } from './footer-hotlink.component';

describe('FooterHotlinkComponent', () => {
  let component: FooterHotlinkComponent;
  let fixture: ComponentFixture<FooterHotlinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterHotlinkComponent]
    });
    fixture = TestBed.createComponent(FooterHotlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
