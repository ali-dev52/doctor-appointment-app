import { TestBed } from '@angular/core/testing';

import { DoctorChoiceService } from './doctor-choice.service';

describe('DoctorChoiceService', () => {
  let service: DoctorChoiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorChoiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
