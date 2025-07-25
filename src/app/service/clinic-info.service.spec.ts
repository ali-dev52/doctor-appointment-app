import { TestBed } from '@angular/core/testing';

import { ClinicInfoService } from './clinic-info.service';

describe('ClinicInfoService', () => {
  let service: ClinicInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClinicInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
