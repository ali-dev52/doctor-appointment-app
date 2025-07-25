import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctorSettingsPage } from './doctor-settings.page';

const routes: Routes = [
  {
    path: '',
    component: DoctorSettingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorSettingsPageRoutingModule {}
