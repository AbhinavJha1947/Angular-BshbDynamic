import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationalStructureComponent } from './organizational-structure.component';

describe('OrganizationalStructureComponent', () => {
  let component: OrganizationalStructureComponent;
  let fixture: ComponentFixture<OrganizationalStructureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganizationalStructureComponent]
    });
    fixture = TestBed.createComponent(OrganizationalStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
