import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from '../../../../core/auth/storage.service';
import { Appointment } from '../appointment.model';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  private apiServerUrl = 'http://localhost:8080/api/admin/appointment';

  constructor(
    private http: HttpClient,
    private _storageService: StorageService
  ) {}

  private getHeaders(): HttpHeaders {
    const token = this._storageService.getBearerToken();
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  public getAppointments(): Observable<any[]> {
    const headers = this.getHeaders();
    const responseType = 'json'; // Set your desired response type here

    // Define options for the request
    const options = {
      headers: headers,
      responseType: responseType as 'json', // Cast responseType to avoid compilation errors
    };
    return this.http.get<any[]>(`${this.apiServerUrl}/all`, options);
  }

  public createAppointment(appointment: Appointment): Observable<any> {
    const headers = this.getHeaders();
    const responseType = 'json'; // Set your desired response type here

    // Define options for the request
    const options = {
      headers: headers,
      responseType: responseType as 'json', // Cast responseType to avoid compilation errors
    };

    console.log('a serv', appointment);
    return this.http.post<Appointment>(
      this.apiServerUrl + '/create',
      {appointment}, 
      options
    );
  }
}
