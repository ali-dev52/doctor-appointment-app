import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-doctor-settings',
  templateUrl: './doctor-settings.page.html',
  styleUrls: ['./doctor-settings.page.scss'],
})
export class DoctorSettingsPage implements OnInit {
  doctorId: number = 0;
  availability = [
    { day_of_week: 1, start_time: '09:00', end_time: '12:00' }
  ];

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.doctorId = params['doctor_id'];
    });
   
    // Example: Get the doctorId from a service or route parameter
    // Replace with your actual logic to get doctorId
  }

  addSlot() {
    // Add a new availability slot with default start and end times
    this.availability.push({ day_of_week: 1, start_time: '09:00', end_time: '12:00' });
  }

  removeSlot(index: number) {
    // Remove a specific availability slot
    this.availability.splice(index, 1);
  }

  submitAvailability() {
    const dayMap: any = {
      1: 'Monday',
      2: 'Tuesday',
      3: 'Wednesday',
      4: 'Thursday',
      5: 'Friday',
      6: 'Saturday',
      7: 'Sunday'
    };
  
    // Convert numeric day_of_week to day names
    const transformedAvailability = this.availability.map(slot => ({
      day_of_week: dayMap[slot.day_of_week], // map number to name
      start_time: slot.start_time,
      end_time: slot.end_time
    }));
  
    const payload = {
      doctor_id: this.doctorId,
      availability: transformedAvailability
    };
  
    console.log('Payload being sent to API:', JSON.stringify(payload, null, 2));
  
    this.http.post('http://localhost/Learn2Earn/public/setAvailability', payload, {
      headers: { 'Content-Type': 'application/json' }
    }).subscribe(
      res => {
        console.log('Success:', res);
      },
      err => {
        console.error('Error:', err);
      }
    );
  }
  
  
}
