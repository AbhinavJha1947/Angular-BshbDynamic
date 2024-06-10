import { TestBed } from '@angular/core/testing';

import { CurrentTenderService } from './current-tender.service';

describe('CurrentTenderService', () => {
  let service: CurrentTenderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentTenderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
