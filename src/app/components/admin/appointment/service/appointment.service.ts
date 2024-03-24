import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { StorageService } from '../../../../core/auth/storage.service';
import { Appointment, LabTest } from '../appointment.model';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  private apiServerUrl = 'http://localhost:8080/api/admin/appointment';

  private appointmentDataSubject = new BehaviorSubject<Appointment | null>(
    null
  );
  appointmentData$ = this.appointmentDataSubject.asObservable();

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

    const mappedAppointment = {
      name: appointment.name || 'Appointment', // If name is not provided, you can set a default value
      appointmentDate: appointment.appointmentDate || '', // You may want to handle default values or validations here
      startTime: appointment.startTime || '', // mew a format
      endTime: appointment.endTime || '', // this one also
      user: {
        id: appointment.user && appointment.user.id ? appointment.user.id : '',
        firstName:
          appointment.user && appointment.user.firstName
            ? appointment.user.firstName
            : '',
        lastName:
          appointment.user && appointment.user.lastName
            ? appointment.user.lastName
            : '',
        email:
          appointment.user && appointment.user.email
            ? appointment.user.email
            : '',
        phoneNum:
          appointment.user && appointment.user.phoneNum
            ? appointment.user.phoneNum
            : '',
      },
      doctor: {
        id:
          appointment.doctor && appointment.doctor.id
            ? appointment.doctor.id
            : '',
        designation:
          appointment.doctor && appointment.doctor.designation
            ? appointment.doctor.designation
            : '',
        name:
          appointment.doctor && appointment.doctor.name
            ? appointment.doctor.name
            : '',
        position:
          appointment.doctor && appointment.doctor.position
            ? appointment.doctor.position
            : '',
      },
      labTechnician: {
        id:
          appointment.labTechnician && appointment.labTechnician.id
            ? appointment.labTechnician.id
            : '',
        name:
          appointment.labTechnician && appointment.labTechnician.name
            ? appointment.labTechnician.name
            : '',
      },
      labTests: appointment.labTests.map((labtest: LabTest) => ({
        id: labtest.id,
        testName: labtest.testName,
        testShortName: labtest.testShortName,
        testNo: labtest.testNo,
         amount: labtest.amount
      })),
    };

    console.log('a serv', appointment);
    return this.http.post<Appointment>(
      this.apiServerUrl + '/create',
      mappedAppointment,
      {
        headers,
      }
    );
  }

  public deleteappointment(id: string): Observable<void> {
    const headers = this.getHeaders();
    const responseType = 'json'; // Set your desired response type here

    // Define options for the request
    const options = {
      headers: headers,
      responseType: responseType as 'json', // Cast responseType to avoid compilation errors
    };
    return this.http.delete<void>(`${this.apiServerUrl}/${id}`, options);
  }

  setAppointmentData(appointmentData: Appointment) {
    this.appointmentDataSubject.next(appointmentData);
  }
}
