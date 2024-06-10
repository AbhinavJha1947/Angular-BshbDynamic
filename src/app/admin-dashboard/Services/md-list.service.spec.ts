import { TestBed } from '@angular/core/testing';

import { MdListService } from './md-list.service';

describe('MdListService', () => {
  let service: MdListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MdListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
