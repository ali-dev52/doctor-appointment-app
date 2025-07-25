import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreloginPage } from './prelogin.page';

const routes: Routes = [
  {
    path: '',
    component: PreloginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreloginPageRoutingModule {}
