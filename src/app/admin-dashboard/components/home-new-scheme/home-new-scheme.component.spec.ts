import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNewSchemeComponent } from './home-new-scheme.component';

describe('HomeNewSchemeComponent', () => {
  let component: HomeNewSchemeComponent;
  let fixture: ComponentFixture<HomeNewSchemeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeNewSchemeComponent]
    });
    fixture = TestBed.createComponent(HomeNewSchemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
