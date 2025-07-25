import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoctorClinicInfoPageRoutingModule } from './doctor-clinic-info-routing.module';

import { DoctorClinicInfoPage } from './doctor-clinic-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoctorClinicInfoPageRoutingModule
  ],
  declarations: [DoctorClinicInfoPage]
})
export class DoctorClinicInfoPageModule {}
