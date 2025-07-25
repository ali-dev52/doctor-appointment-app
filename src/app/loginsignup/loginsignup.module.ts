import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginsignupPageRoutingModule } from './loginsignup-routing.module';

import { LoginsignupPage } from './loginsignup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginsignupPageRoutingModule
  ],
  declarations: [LoginsignupPage]
})
export class LoginsignupPageModule {}
