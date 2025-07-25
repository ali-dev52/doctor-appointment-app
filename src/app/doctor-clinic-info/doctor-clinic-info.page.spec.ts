import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DoctorClinicInfoPage } from './doctor-clinic-info.page';

describe('DoctorClinicInfoPage', () => {
  let component: DoctorClinicInfoPage;
  let fixture: ComponentFixture<DoctorClinicInfoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorClinicInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
