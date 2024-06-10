import { TestBed } from '@angular/core/testing';

import { OfficerListService } from './officer-list.service';

describe('OfficerListService', () => {
  let service: OfficerListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfficerListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
