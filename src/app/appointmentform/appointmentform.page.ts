import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointmentform',
  templateUrl: './appointmentform.page.html',
  styleUrls: ['./appointmentform.page.scss'],
})
export class AppointmentformPage implements OnInit {
  appointmentForm!: FormGroup;
  selectedDoctor: any = {};
  patient: any = {};
  minDate: string = new Date().toISOString();
  dateOnly: string = '';
  availableSlots: any[] = [];
  selectedSlot: any = null;

  constructor(
    private formBuilder: FormBuilder,
    private alertController: AlertController,
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {
    const params = this.route.snapshot.queryParams;

    // Doctor Info
    this.selectedDoctor = {
      id: params['doctorId'],
      name: params['doctorName'],
      specialization: params['specialization'],
      profile: params['profile']
    };

    // Patient Info
    this.patient = {
      id: params['patientId'],
      name: params['patientName'],
      phone: params['patientPhone'],
      email: params['patientEmail']
    };

    // Form Initialization
    this.appointmentForm = this.formBuilder.group({
      name: [this.patient.name || '', Validators.required],
      phone: [this.patient.phone || '', [Validators.required, Validators.pattern('^[0-9]{10,}$')]],
      doctor: [this.selectedDoctor.name || '', Validators.required],
      datetime: ['', Validators.required], // Only date
      notes: ['']
    });

    // Load available slots when date changes
    // this.appointmentForm.get('datetime')?.valueChanges.subscribe(val => {
    //   this.dateOnly = val.split('T')[0];
    //   this.loadAvailableSlots();
    // });
    this.appointmentForm.get('datetime')?.valueChanges.subscribe(val => {
      if (val) {
        this.dateOnly = val.split('T')[0];
        this.loadAvailableSlots();
      } else {
        this.dateOnly = '';
        this.availableSlots = [];
      }
    });
    
  }

  loadAvailableSlots() {
    this.availableSlots = [];
    this.selectedSlot = null;

    const requestData = {
      doctor_id: this.selectedDoctor.id,
      date: this.dateOnly
    };

    this.http.post<any>('http://localhost/Learn2Earn/public/checkDoctorAvailability1', requestData)
      .subscribe(
        res => {
          if (res.status === 'success') {
            this.availableSlots = res.available_slots;
          } else {
            this.availableSlots = [];
          }
        },
        error => {
          console.error('Error fetching available slots:', error);
        }
      );
  }

  async onSubmit() {
    console.log('onSubmit triggered');
    if (this.appointmentForm.valid && this.selectedSlot) {
      const formValue = this.appointmentForm.value;

      const formattedData = {
        patient_id: this.patient.id,
        patient_name: formValue.name,
        patient_email: this.patient.email,
        phone: formValue.phone,
        doctor_id: this.selectedDoctor.id,
        doctor: this.selectedDoctor.name,
        specialization: this.selectedDoctor.specialization,
        date: this.dateOnly,
        time: this.selectedSlot.time,
        token_number: this.selectedSlot.token_number,
        notes: formValue.notes || ''
      };console.log('📋 Form Value:', this.appointmentForm.value);

      console.log('Submitting appointment:', formattedData);
      // Save appointment
      this.http.post('http://localhost/Learn2Earn/public/saveAppointment', formattedData).subscribe(
        async (res: any) => {
          const alert = await this.alertController.create({
            header: 'Appointment Sent',
            message: `Your appointment with ${formattedData.doctor} on ${this.dateOnly} at ${this.selectedSlot.time} (Token #${this.selectedSlot.token_number}) has been submitted successfully.`,
            buttons: ['OK']
          });
          await alert.present();
          this.appointmentForm.reset();
          this.availableSlots = [];
          this.selectedSlot = null;
          this.router.navigate(['/menu']);
        },
        async (error) => {
          const alert = await this.alertController.create({
            header: 'Error',
            message: 'Failed to submit appointment. Please try again.',
            buttons: ['OK']
          });
          await alert.present();
        }
      );
    } else {
      const alert = await this.alertController.create({
        header: 'Incomplete Form',
        message: this.selectedSlot ? 'Please fill in all required fields.' : 'Please select a time slot.',
        buttons: ['OK']
      });
      await alert.present();
    }
  }
  
}

