import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHyperLinkComponent } from './home-hyper-link.component';

describe('HomeHyperLinkComponent', () => {
  let component: HomeHyperLinkComponent;
  let fixture: ComponentFixture<HomeHyperLinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeHyperLinkComponent]
    });
    fixture = TestBed.createComponent(HomeHyperLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
