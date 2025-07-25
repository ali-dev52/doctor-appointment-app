
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetdoctorService {

  private apiUrl = 'http://localhost/Learn2Earn/public/doctorsall';

  constructor(private http: HttpClient) { }

  getDoctors(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
