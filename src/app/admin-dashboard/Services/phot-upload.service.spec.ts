import { TestBed } from '@angular/core/testing';

import { PhotUploadService } from './phot-upload.service';

describe('PhotUploadService', () => {
  let service: PhotUploadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotUploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
