import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchieveTendersComponent } from './archieve-tenders.component';

describe('ArchieveTendersComponent', () => {
  let component: ArchieveTendersComponent;
  let fixture: ComponentFixture<ArchieveTendersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArchieveTendersComponent]
    });
    fixture = TestBed.createComponent(ArchieveTendersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
