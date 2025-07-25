import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost/Learn2Earn/public/login1'; // Update with your actual API URL
  
    constructor(private http: HttpClient) {}
  
    // Method to handle user registration
    login(email: string, password: string,): Observable<any> {
      const body = {
        
        email,
        password,
       
        
      };
  
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
      });
  
      // Make the HTTP POST request and return the observable
      return this.http.post(this.apiUrl, body, { headers });
    }
}


