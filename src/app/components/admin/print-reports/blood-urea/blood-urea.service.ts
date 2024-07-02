import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StorageService } from '../../../../core/auth/storage.service';
import { LabTestInvoice } from '../../lab-test-invoice/lab-test-invoice.model';
import { BloodUrea } from './blood-urea.model';
 
@Injectable({
  providedIn: 'root',
})
export class BloodUreaService {
  private apiServerUrl =
    'http://localhost:8080/api/report/blood-urea';
  private bloodUreaDataSubject =
    new BehaviorSubject<BloodUrea | null>(null);
  constructor(
    private http: HttpClient,
    private _storageService: StorageService
  ) {}

  private getHeaders(): HttpHeaders {
    const token = this._storageService.getBearerToken();
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  public createBloodUrea(
    alkalinePhosphate: any
  ): Observable<BloodUrea> {
    const headers = this.getHeaders();

    const mappedAlkalinePhosphate = {
      uid: alkalinePhosphate.uid, 
      appointmentId: alkalinePhosphate.appointmentId,
      completed: alkalinePhosphate.completed, 
      createdDate: alkalinePhosphate.createdDate, 
      sampleCollectedDate: alkalinePhosphate.sampleCollectedDate,
      sampleReceivedDate: alkalinePhosphate.sampleReceivedDate,
      reportAuthorizedDate: alkalinePhosphate.reportAuthorizedDate, 
      alkalinePhosphataseValue: alkalinePhosphate.alkalinePhosphataseValue, 
      refBy: alkalinePhosphate.refBy,
      remarks: alkalinePhosphate.remarks,
    };

    console.log('a serv', alkalinePhosphate);
    return this.http.post<BloodUrea>(
      this.apiServerUrl + '/create',
      mappedAlkalinePhosphate,
      {
        headers,
      }
    );
  }

  setLabTestInvoiceData(bloodUreaData: BloodUrea) {
    this.bloodUreaDataSubject.next(bloodUreaData);
  }

  
  public findByAppointmentId(
    appointmentId: any | any
  ): Observable<any> {
    const headers = this.getHeaders();
    const responseType = 'json'; // Set your desired response type here

    // Define options for the request
    const options = {
      headers: headers,
      responseType: responseType as 'json', // Cast responseType to avoid compilation errors
    };
    return this.http.get<BloodUrea>(
      `${this.apiServerUrl}/by-appointment?appointmentId=${appointmentId}`,
      options
    );
  }

  public getBloodUreaByID(id: string | any): Observable<any> {
    const headers = this.getHeaders();
    const responseType = 'json'; // Set your desired response type here

    // Define options for the request
    const options = {
      headers: headers,
      responseType: responseType as 'json', // Cast responseType to avoid compilation errors
    };
    return this.http.get<BloodUrea>(
      `${this.apiServerUrl}/user/${id}`,
      options
    );
  }
}
