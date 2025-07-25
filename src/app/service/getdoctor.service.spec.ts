import { TestBed } from '@angular/core/testing';

import { GetdoctorService } from './getdoctor.service';

describe('GetdoctorService', () => {
  let service: GetdoctorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetdoctorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
