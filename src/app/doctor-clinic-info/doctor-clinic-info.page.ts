import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-clinic-info',
  templateUrl: './doctor-clinic-info.page.html',
  styleUrls: ['./doctor-clinic-info.page.scss'],
})
export class DoctorClinicInfoPage {
  clinicName = '';
  city = '';
  address = '';
  feeRoutine: number | null = null;
  feeEmergency: number | null = null;
  dailyPatientLimit: number | null = null;

  doctor: any = {};

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    const userData = localStorage.getItem('loggedInUser');
    if (userData) {
      this.doctor = JSON.parse(userData);
    }
  }

  saveClinicInfo() {
    const clinicData = {
      doctor_id: this.doctor.id,
      clinic_name: this.clinicName,
      city: this.city,
      address: this.address,
      fee_routine: this.feeRoutine,
      fee_emergency: this.feeEmergency,
      daily_patient_limit: this.dailyPatientLimit,
    };

    console.log('Sending clinic info:', clinicData);

    this.http.post('http://localhost/Learn2Earn/public/saveClinicInfo', clinicData).subscribe({
      next: (res) => {
        console.log('Saved:', res);
        this.router.navigate(['/doctor-dashboard']);
      },
      error: (err) => {
        console.error('Error:', err);
      },
    });
  }
}
