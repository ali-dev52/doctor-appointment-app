import { AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service'; // Update path if needed
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login1.page.html',
  styleUrls: ['./login1.page.scss'],
})
export class Login1Page {
  email: string = '';
  password: string = '';
  message: string = '';
  a: string='';
  constructor(
    private loginService: LoginService,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private router: Router
    
  ) {}

  navigateToOtherPage() {
    // Navigate to '/other-page'
    this.router.navigate(['/loginsignup']);
  }
  navigateToOtherPagemenu() {
    // Navigate to '/other-page'
    this.router.navigate(['/menu']);
  }
  async login() {
    // const loading = await this.loadingCtrl.create({
    //   message: 'Logging in...',
    // });
    // await loading.present();

    console.log('Running API call to signup...');
    // Call the signup method from the service
    this.loginService.login(this.email, this.password).subscribe(
      (response) => {
        // Handle success response from the API
        console.log('handling responce of api to signup...');
        this.a=response.status;
        
           if (!response.error) {
            // Save user object to localStorage
            localStorage.setItem('loggedInUser', JSON.stringify(response.user));
            localStorage.setItem('userRole', response.role); // optional
            this.message = 'login successful!';
           console.log('message: ' ,this.message);
           console.log('UserRole: ' ,response.role);
           if(response.role == 'patient'){
             this.router.navigate(['/menu']); }
           else if(response.role == 'doctor'){
            this.router.navigate(['/doctor-dashboard']); }
          }
           
        else {
          console.log('status: ', this.a);
          this.message = 'Signup failed: ' + response.message;
          console.log('message: ' ,this.message);
        }
      },
      (error) => {
        // Handle error response
        this.message = 'An error occurred: ' + error.message;
        console.log('message: ' ,this.message);
      }
      
    );
   
  }
}

