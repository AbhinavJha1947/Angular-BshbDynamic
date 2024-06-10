import { TestBed } from '@angular/core/testing';

import { AboutMdMessageService } from './about-md-message.service';

describe('AboutMdMessageService', () => {
  let service: AboutMdMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AboutMdMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
