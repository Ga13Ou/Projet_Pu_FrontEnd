import { TestBed, inject } from '@angular/core/testing';

import { BackEndServiceService } from './back-end-service.service';

describe('BackEndServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BackEndServiceService]
    });
  });

  it('should be created', inject([BackEndServiceService], (service: BackEndServiceService) => {
    expect(service).toBeTruthy();
  }));
});
