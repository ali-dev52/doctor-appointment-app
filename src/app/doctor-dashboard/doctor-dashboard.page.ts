import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-doctor-dashboard',
  templateUrl: './doctor-dashboard.page.html',
  styleUrls: ['./doctor-dashboard.page.scss'],
})
export class DoctorDashboardPage {
  doctorMessage: string = '';
messageDate: string = '';
messageSuccess: string = '';
messageError: string = '';
isSendingMessage: boolean = false;

  doctor: any = {};
  clinicInfo: any = {};
  appointments: any[] = [];
  loadingAppointments: { [id: number]: boolean } = {}; // Tracks loading state per appointment

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {
    const userData = localStorage.getItem('loggedInUser');
    if (userData) {
      this.doctor = JSON.parse(userData);
      const doctorId = this.doctor.id;

      this.getClinicInfo(doctorId).subscribe((response: any) => {
        if (response.status === 'success') {
          this.clinicInfo = response.data;
        }
      });

      this.loadPendingAppointments(doctorId);
    }
  }
  sendMessageToPatients() {
    this.messageSuccess = '';
    this.messageError = '';
    this.isSendingMessage = true;
  
    if (!this.messageDate || !this.doctorMessage) {
      this.messageError = 'Please select a date and enter a message.';
      this.isSendingMessage = false;
      return;
    }
  
    const payload = {
      doctor_id: this.doctor.id,
      date: this.messageDate.split('T')[0],
      message: this.doctorMessage
    };
  
    this.http.post<any>('http://localhost/Learn2Earn/public/sendDoctorMessage', payload)
      .subscribe(
        res => {
          if (res.status) {
            this.messageSuccess = 'Message sent successfully to all patients!';
            this.doctorMessage = '';
            this.messageDate = '';
          } else {
            this.messageError = res.message || 'Failed to send message.';
          }
        },
        err => {
          this.messageError = 'An error occurred while sending the message.';
          console.error(err);
        },
        () => {
          this.isSendingMessage = false;
        }
      );
  }
  

  getClinicInfo(doctorId: string) {
    return this.http.post('http://localhost/Learn2Earn/public/getClinicInfo', {
      doctor_id: doctorId,
    });
  }

  loadPendingAppointments(doctorId: string) {
    this.http.post<any>('http://localhost/Learn2Earn/public/getPendingAppointments', {
      doctor_id: doctorId,
    }).subscribe(
      res => {
        if (!res.error) {
          this.appointments = res.appointments;
        }
      },
      err => {
        console.error('Error fetching appointments', err);
      }
    );
  }

  acceptAppointment(appointmentId: number) {
    this.setLoading(appointmentId, true);

    this.http.post('http://localhost/Learn2Earn/public/updateAppointmentStatus', {
      id: appointmentId,
      status: 'accept'
    }, { responseType: 'text' }).subscribe(
      res => {
        const json = JSON.parse(res.split('Notification')[0]);
        if (json && json.status) {
          this.removeFromList(appointmentId);
        }
      },
      err => {
        console.error('Error accepting appointment', err);
      },
      () => {
        this.setLoading(appointmentId, false);
      }
    );
  }

  rejectAppointment(appointmentId: number) {
    this.setLoading(appointmentId, true);

    this.http.post('http://localhost/Learn2Earn/public/updateAppointmentStatus', {
      id: appointmentId,
      status: 'reject'
    }, { responseType: 'text' }).subscribe(
      res => {
        const json = JSON.parse(res.split('Notification')[0]);
        if (json && json.status) {
          this.removeFromList(appointmentId);
        }
      },
      err => {
        console.error('Error rejecting appointment', err);
      },
      () => {
        this.setLoading(appointmentId, false);
      }
    );
  }

  removeFromList(appointmentId: number) {
    this.appointments = this.appointments.filter(a => a.id !== appointmentId);
  }

  setLoading(appointmentId: number, isLoading: boolean) {
    this.loadingAppointments[appointmentId] = isLoading;
  }

  editProfile() {
    this.router.navigate(['/edit-profile']);
  }

  openAvailabilityModal() {
   
    this.router.navigate(['/doctor-settings'], {
      queryParams: { doctor_id: this.doctor.id }
    });
  }

  updateFee() {
    console.log('New fee set:', this.doctor.fee);
  }

  goToClinicInfoForm() {
    this.router.navigate(['/doctor-clinic-info']);
  }

  toggleDarkTheme(shouldAdd: boolean) {
    document.body.classList.toggle('dark', shouldAdd);
  }
}
