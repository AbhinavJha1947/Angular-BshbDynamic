import { TestBed } from '@angular/core/testing';

import { ChairmenListService } from './chairmen-list.service';

describe('ChairmenListService', () => {
  let service: ChairmenListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChairmenListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
