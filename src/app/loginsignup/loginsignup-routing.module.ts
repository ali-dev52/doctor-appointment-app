import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginsignupPage } from './loginsignup.page';

const routes: Routes = [
  {
    path: '',
    component: LoginsignupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginsignupPageRoutingModule {}
