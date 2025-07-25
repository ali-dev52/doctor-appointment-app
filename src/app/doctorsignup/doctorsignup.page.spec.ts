import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DoctorsignupPage } from './doctorsignup.page';

describe('DoctorsignupPage', () => {
  let component: DoctorsignupPage;
  let fixture: ComponentFixture<DoctorsignupPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorsignupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
