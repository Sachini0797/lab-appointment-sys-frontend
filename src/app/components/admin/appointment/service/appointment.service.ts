import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
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
    // const token =
      // 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTcxMTAwMTM4MCwiZXhwIjoxNzExMDg3NzgwfQ.D5pFWlMpahTRFGO16X41m5Kjzcy_1VhYA_edlqhWQoM';
    // return new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const header = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });
    return header;
  }

  public getAppointments(): Observable<any[]> {
    const headers = this.getHeaders();
    const responseType = 'json'; // Set your desired response type here

    // Define options for the request
    const options = {
      headers: headers,
      responseType: responseType as 'json', // Cast responseType to avoid compilation errors
    };
    return this.http.get<Appointment[]>(`${this.apiServerUrl}/all`, options);
  }

  public createAppointment(appointment: any): Observable<Appointment> {
    const headers = this.getHeaders();

    // delete appointment.id;
    // // delete appointment.appointmentDate;
    // delete appointment.startTime;
    // delete appointment.endTime;
    // delete appointment.user;
    // delete appointment.doctor;
    // delete appointment.labTechnician;
    // delete appointment.labTests;

    const mappedAppointment = {
      // ...appointment,
      // user: {
      //   id: Number(appointment.user.id),
      // },
      // doctor: {
      //   id: Number(appointment.user.id),
      // },
      // labTechnician: {
      //   id: Number(appointment.user.id),
      // },
      // labTests: [],

      name: appointment.name || 'Appointment', // If name is not provided, you can set a default value
      appointmentDate: appointment.appointmentDate || '', // You may want to handle default values or validations here
      startTime: appointment.startTime || '', // mew a format
      endTime: appointment.endTime || '', // this one also
      user: {
        id: appointment.user && appointment.user.id ? appointment.user.id : '',
        email: appointment.user && appointment.user.email ? appointment.user.email: ''
      },
      doctor: {
        id:
          appointment.doctor && appointment.doctor.id
            ? appointment.doctor.id
            : '',
      },
      labTechnician: {
        id:
          appointment.labTechnician && appointment.labTechnician.id
            ? appointment.labTechnician.id
            : '',
      },
      labTests: appointment.labTests || [],
    };

    // delete appointment?.id; //,ethana id eka empty string nam dlete kranwa

    console.log('a serv', appointment); //mekath print wenawa //a,mmmo sachini aiiiii
    return this.http.post<Appointment>(
      this.apiServerUrl + '/create',
      mappedAppointment,
      {
        headers,
      }
    );
  }
}
