import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorChoiceService {

  private API_URL = 'http://localhost/Learn2Earn/public/setAvailability'; // Replace with your backend

  constructor(private http: HttpClient) {}

  setAvailability(doctor_id: number, availability: any[]): Observable<any> {
    return this.http.post(`${this.API_URL}/setAvailability`, {
      doctor_id,
      availability
    });
  }
}
