import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetdoctorService } from '../service/getdoctor.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  doctors: any[] = [];
  filteredDoctors: any[] = [];
  searchText: string = '';
  selectedCategory: string = '';
  user: any = {};
  categories = [
    { title: 'Cardiology', image: 'assets/heart.jpeg' },
    { title: 'Dermatology', image: 'assets/body.jpeg' },
    { title: 'Orthopedics', image: 'assets/Orthopedics.png' },
    { title: 'Eye Specialist', image: 'assets/eye.png' },
    { title: 'Neurology', image: 'assets/brain.jpeg' },
    { title: 'Dental Surgeon', image: 'assets/dental.png' },
  ];

  constructor(private router: Router, private getdoctorService: GetdoctorService) {}

  ngOnInit() {
    const userData = localStorage.getItem('loggedInUser');
    if (userData) {
      this.user = JSON.parse(userData);
    }
    this.loadDoctors();
  }

  loadDoctors() {
    this.getdoctorService.getDoctors().subscribe(
      (response) => {
        if (!response.error) {
          this.doctors = response.doctors;
          this.filteredDoctors = [...this.doctors];
        } else {
          console.error(response.message);
        }
      },
      (error) => {
        console.error('API error:', error);
      }
    );
  }

  filterDoctors() {
    const query = this.searchText.toLowerCase().trim();

    this.filteredDoctors = this.doctors.filter((doc) => {
      const matchesName = doc.name.toLowerCase().includes(query);
      const matchesCategory = this.selectedCategory
        ? doc.specialization.toLowerCase() === this.selectedCategory.toLowerCase()
        : true;

      return matchesName && matchesCategory;
    });
  }

  filterByCategory(category: string) {
    this.selectedCategory = category;
    this.filterDoctors();
  }
  logout() {
    // Clear storage/token, then redirect to login
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigate(['/login1']); // Adjust route as needed
  }
  

  clearCategory() {
    this.selectedCategory = '';
    this.filterDoctors();
  }

  appointment(doctor: any) {
    const queryParams = {
      // Doctor Info
      doctorId: doctor.id,
      doctorName: doctor.name,
      specialization: doctor.specialization,
      clinicName: doctor.clinic_name, // Added clinic information
      address: doctor.address, // Added address
      emergencyFee: doctor.fee_emergency, // Added emergency fee
      routineFee: doctor.fee_routine, // Added routine fee
      city: doctor.city, // Added city

      // Patient Info
      patientId: this.user.id,
      patientName: this.user.username,
      patientPhone: this.user.phone,
      patientEmail: this.user.email // in case you want to use it
    };

    this.router.navigate(['/appointmentform'], { queryParams });
  }
}
