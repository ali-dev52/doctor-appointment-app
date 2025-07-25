import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShowtimeslotPage } from './showtimeslot.page';

describe('ShowtimeslotPage', () => {
  let component: ShowtimeslotPage;
  let fixture: ComponentFixture<ShowtimeslotPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowtimeslotPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
