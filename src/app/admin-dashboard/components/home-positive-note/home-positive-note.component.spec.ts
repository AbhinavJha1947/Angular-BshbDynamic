import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePositiveNoteComponent } from './home-positive-note.component';

describe('HomePositiveNoteComponent', () => {
  let component: HomePositiveNoteComponent;
  let fixture: ComponentFixture<HomePositiveNoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomePositiveNoteComponent]
    });
    fixture = TestBed.createComponent(HomePositiveNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
