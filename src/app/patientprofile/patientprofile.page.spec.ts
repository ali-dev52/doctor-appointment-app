import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PatientprofilePage } from './patientprofile.page';

describe('PatientprofilePage', () => {
  let component: PatientprofilePage;
  let fixture: ComponentFixture<PatientprofilePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientprofilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
