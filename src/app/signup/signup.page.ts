import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { SignupService } from '../signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {
  username: string = '';
  email: string = '';
  phone: string = '';
  password: string = '';
  confirmPassword: string = '';
  message: string = '';
  a: string='';
  constructor(private router: Router, private alertController: AlertController, private signupService: SignupService) { }
  async onSignup() {
    if (!this.username || !this.email || !this.password || !this.password || !this.confirmPassword) {
          this.showAlert('Error', 'Please fill in all fields.');
        return;
       }
       if (!this.isValidEmail(this.email)) {
        this.showAlert('Error', 'Please enter a valid email address.');
        return;
      }
    if (this.password !== this.confirmPassword) {
      this.message = 'Passwords do not match!';
      return;

    }
    console.log('Running API call to signup...');
    // Call the signup method from the service
    this.signupService.signup(this.username, this.email, this.password, this.phone).subscribe(
      (response) => {
        // Handle success response from the API
        console.log('handling responce of api to signup...');
        this.a=response.status;
        
    
        if (response.message === 'Registration  successful') {
          this.message = 'Signup successful!';
          this.showAlert('Success', 'Account created successfully!');
           this.router.navigate(['/login1']); 
           
        } else {
          console.log('status: ', this.a);
          this.message = 'Signup failed: ' + response.message;
         
        }
      },
      (error) => {
        // Handle error response
        this.message = 'An error occurred: ' + error.message;
      }
    );
    console.log('message: ' ,this.message);
   
  }
  isValidEmail(email: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  }

  // async signup() {
  //   // Basic validation
  //   if (!this.username || !this.email || !this.password || !this.password || !this.confirmPassword) {
  //     this.showAlert('Error', 'Please fill in all fields.');
  //     return;
  //   }

  //   if (this.password !== this.confirmPassword) {
  //     this.showAlert('Error', 'Passwords do not match.');
  //     return;
  //   }

  //   // Simulate a successful signup
  //   this.showAlert('Success', 'Account created successfully!');
  //   this.router.navigate(['/login']); // Redirect to login page
  // }

  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });
    await alert.present();

  }

}