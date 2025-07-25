import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowtimeslotPage } from './showtimeslot.page';

const routes: Routes = [
  {
    path: '',
    component: ShowtimeslotPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowtimeslotPageRoutingModule {}
