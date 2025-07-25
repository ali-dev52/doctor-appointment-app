import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginsignupPage } from './loginsignup.page';

describe('LoginsignupPage', () => {
  let component: LoginsignupPage;
  let fixture: ComponentFixture<LoginsignupPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginsignupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
