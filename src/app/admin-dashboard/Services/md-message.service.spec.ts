import { TestBed } from '@angular/core/testing';

import { MdMessageService } from './md-message.service';

describe('MdMessageService', () => {
  let service: MdMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MdMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
