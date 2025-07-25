import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../service/doctor.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-doctorsignup',
  templateUrl: './doctorsignup.page.html',
  styleUrls: ['./doctorsignup.page.scss'],
})
export class DoctorsignupPage implements OnInit {
  
  doctor = {
    name: '',
    phone: '',
    email: '',
    specialization: '',
    qualification: '',
    password: '',
    confirmpassword: ''
  };
  constructor(  private doctorService: DoctorService,
    private alertCtrl: AlertController, private router: Router) {}

  ngOnInit() {}

  register() {
    this.doctorService.registerDoctor(this.doctor).subscribe(async res => {
      const alert = await this.alertCtrl.create({
        header: res.error ? 'Error' : 'Success',
        message: res.message,
        buttons: ['OK']
      });
      await alert.present();

      if (!res.error) {
        // optionally reset form or navigate
      }
    });
  }
}