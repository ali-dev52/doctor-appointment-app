import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentformPage } from './paymentform.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentformPageRoutingModule {}
