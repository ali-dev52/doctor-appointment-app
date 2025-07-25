import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatientprofilePageRoutingModule } from './patientprofile-routing.module';

import { PatientprofilePage } from './patientprofile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PatientprofilePageRoutingModule
  ],
  declarations: [PatientprofilePage]
})
export class PatientprofilePageModule {}
