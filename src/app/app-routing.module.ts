import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  
  {
    path: 'prelogin',
    loadChildren: () => import('./prelogin/prelogin.module').then( m => m.PreloginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'loginsignup',
    loadChildren: () => import('./loginsignup/loginsignup.module').then( m => m.LoginsignupPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'doctorsignup',
    loadChildren: () => import('./doctorsignup/doctorsignup.module').then( m => m.DoctorsignupPageModule)
  },
  {
    path: 'appointmentform',
    loadChildren: () => import('./appointmentform/appointmentform.module').then( m => m.AppointmentformPageModule)
  },
  {
    
    path: 'patientprofile',
    loadChildren: () => import('./patientprofile/patientprofile.module').then( m => m.PatientprofilePageModule)
  },
  {
    path: 'paymentform',
    loadChildren: () => import('./paymentform/paymentform.module').then( m => m.PaymentformPageModule)
  },
  {
    path: 'doctor-dashboard',
    loadChildren: () => import('./doctor-dashboard/doctor-dashboard.module').then( m => m.DoctorDashboardPageModule)
  },
  {
    path: 'login1',
    loadChildren: () => import('./login1/login1.module').then( m => m.Login1PageModule)
  },
  {
    path: 'doctor-settings',
    loadChildren: () => import('./doctor-settings/doctor-settings.module').then( m => m.DoctorSettingsPageModule)
  },
  {
    path: 'doctor-clinic-info',
    loadChildren: () => import('./doctor-clinic-info/doctor-clinic-info.module').then( m => m.DoctorClinicInfoPageModule)
  },
  {
    path: 'showtimeslot',
    loadChildren: () => import('./showtimeslot/showtimeslot.module').then( m => m.ShowtimeslotPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
