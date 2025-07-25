import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoctorSettingsPageRoutingModule } from './doctor-settings-routing.module';

import { DoctorSettingsPage } from './doctor-settings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoctorSettingsPageRoutingModule
  ],
  declarations: [DoctorSettingsPage]
})
export class DoctorSettingsPageModule {}
