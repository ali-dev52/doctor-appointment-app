import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaymentformPage } from './paymentform.page';

describe('PaymentformPage', () => {
  let component: PaymentformPage;
  let fixture: ComponentFixture<PaymentformPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentformPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
