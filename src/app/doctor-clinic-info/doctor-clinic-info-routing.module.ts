import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctorClinicInfoPage } from './doctor-clinic-info.page';

const routes: Routes = [
  {
    path: '',
    component: DoctorClinicInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorClinicInfoPageRoutingModule {}
