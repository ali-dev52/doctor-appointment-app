import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  // Import ReactiveFormsModule
import { IonicModule } from '@ionic/angular';
import { AppointmentformPageRoutingModule } from './appointmentform-routing.module';
import { AppointmentformPage } from './appointmentform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, // Add this line
    IonicModule,
    AppointmentformPageRoutingModule
  ],
  declarations: [AppointmentformPage]
})
export class AppointmentformPageModule {}

