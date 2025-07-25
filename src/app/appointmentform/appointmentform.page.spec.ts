import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppointmentformPage } from './appointmentform.page';

describe('AppointmentformPage', () => {
  let component: AppointmentformPage;
  let fixture: ComponentFixture<AppointmentformPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentformPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
