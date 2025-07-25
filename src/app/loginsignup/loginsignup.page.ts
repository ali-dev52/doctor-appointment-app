import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-loginsignup',
  templateUrl: './loginsignup.page.html',
  styleUrls: ['./loginsignup.page.scss'],
})
export class LoginsignupPage implements OnInit {

  constructor(private router: Router, private alertController: AlertController) { }
  async onSignup() {
    const alert = await this.alertController.create({
      header: 'Select Your Role',
      message: 'Please choose if you are a Patient or Doctor.',
      inputs: [
        {
          name: 'role', 
          type: 'radio',
          label: 'Patient',
          value: 'patient',
          checked: true 
        },
        {
          name: 'role', 
          type: 'radio',
          label: 'Doctor',
          value: 'doctor',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'OK',
          handler: (data) => {
           
            console.log('Data received from alert:', data);

           
            
              console.log('Selected role:', data);
              if (data === 'patient') {
                console.log('Navigating to Patient Signup');
                this.router.navigate(['/signup']);
              } else if (data === 'doctor') {
                console.log('Navigating to Doctor Signup');
                this.router.navigate(['/doctorsignup']);
              }
            
             else {
              console.log('No role selected!');
            }
          }
        }
      ]
    });

    await alert.present();
  }


  navigateToOtherPage() {
   
    this.router.navigate(['/login1']);
  }
  navigateToOtherPagesignup() {
   
    this.router.navigate(['/signup']);
  }
  ngOnInit() {
  }

}
