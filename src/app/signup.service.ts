import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  private apiUrl = 'http://localhost/Learn2Earn/public/signupmyapp'; // Update with your actual API URL

  constructor(private http: HttpClient) {}

  // Method to handle user registration
  signup(username: string, email: string, password: string, phone: string): Observable<any> {
    const body = {
      username,
      email,
      password,
      phone
      
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    // Make the HTTP POST request and return the observable
    return this.http.post(this.apiUrl, body, { headers });
  }
}

