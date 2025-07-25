import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentformPageRoutingModule } from './paymentform-routing.module';

import { PaymentformPage } from './paymentform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentformPageRoutingModule
  ],
  declarations: [PaymentformPage]
})
export class PaymentformPageModule {}
