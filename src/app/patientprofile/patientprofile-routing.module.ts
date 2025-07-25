import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientprofilePage } from './patientprofile.page';

const routes: Routes = [
  {
    path: '',
    component: PatientprofilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientprofilePageRoutingModule {}
