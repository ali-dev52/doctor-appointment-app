import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppointmentformPage } from './appointmentform.page';

const routes: Routes = [
  {
    path: '',
    component: AppointmentformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppointmentformPageRoutingModule {}
