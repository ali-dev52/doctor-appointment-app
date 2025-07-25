import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private apiUrl = 'http://localhost/Learn2Earn/public/doctorSignup'; // change if hosted

  constructor(private http: HttpClient) {}

  registerDoctor(doctorData: any): Observable<any> {
    return this.http.post(this.apiUrl, doctorData);
  }
}

