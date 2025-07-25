import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // Ensure this is set to 'root'
})
export class ApiserviceService {
  private baseUrl = 'http://localhost:5000/api'; // Replace with your backend URL

  constructor(private http: HttpClient) {}

  // Example method for doctor registration
  registerDoctor(doctorData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/doctors/register`, doctorData);
  }
}