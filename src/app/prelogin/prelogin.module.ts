import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreloginPageRoutingModule } from './prelogin-routing.module';

import { PreloginPage } from './prelogin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreloginPageRoutingModule
  ],
  declarations: [PreloginPage]
})
export class PreloginPageModule {}
