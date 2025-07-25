import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowtimeslotPageRoutingModule } from './showtimeslot-routing.module';

import { ShowtimeslotPage } from './showtimeslot.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowtimeslotPageRoutingModule
  ],
  declarations: [ShowtimeslotPage]
})
export class ShowtimeslotPageModule {}
