import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClinicInfoService {

  private apiUrl = 'http://localhost/Learn2Earn/public';  // Replace with your actual API URL

  constructor(private http: HttpClient) { }

  // Method to save or update clinic info
  saveClinicInfo(doctorId: number, clinicData: any): Observable<any> {
    const url = `${this.apiUrl}/saveClinicInfo`;
    const body = {
      doctor_id: doctorId,
      clinic_name: clinicData.clinic_name,
      city: clinicData.city,
      address: clinicData.address,
      fee_routine: clinicData.fee_routine,
      fee_emergency: clinicData.fee_emergency,
      daily_patient_limit: clinicData.daily_patient_limit
    };

    return this.http.post(url, body);
  }
}
