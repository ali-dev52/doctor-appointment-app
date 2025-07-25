import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DoctorSettingsPage } from './doctor-settings.page';

describe('DoctorSettingsPage', () => {
  let component: DoctorSettingsPage;
  let fixture: ComponentFixture<DoctorSettingsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorSettingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
