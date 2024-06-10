import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSliderImageComponent } from './home-slider-image.component';

describe('HomeSliderImageComponent', () => {
  let component: HomeSliderImageComponent;
  let fixture: ComponentFixture<HomeSliderImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeSliderImageComponent]
    });
    fixture = TestBed.createComponent(HomeSliderImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
