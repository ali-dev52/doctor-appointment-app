import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorsignupPage } from './doctorsignup.page';

const routes: Routes = [
  {
    path: '',
    component: DoctorsignupPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorsignupPageRoutingModule {}