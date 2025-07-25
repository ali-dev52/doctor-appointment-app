import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DoctorsignupPage } from './doctorsignup.page';
import { DoctorsignupPageRoutingModule } from './doctorsignup-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoctorsignupPageRoutingModule,
  ],
  declarations: [DoctorsignupPage],
})
export class DoctorsignupPageModule {}
