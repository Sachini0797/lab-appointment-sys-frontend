import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StorageService } from '../../../../core/auth/storage.service';
import { LabTestInvoice } from '../../lab-test-invoice/lab-test-invoice.model';
import { AlkalinePhosphate } from './alkaline-phosphate.model';

@Injectable({
  providedIn: 'root',
})
export class AlkalinePhosphateService {
  private apiServerUrl =
    'http://localhost:8080/api/report/alkaline-phosphatases';
  private alkalinePhosphateDataSubject =
    new BehaviorSubject<AlkalinePhosphate | null>(null);
  constructor(
    private http: HttpClient,
    private _storageService: StorageService
  ) {}

  private getHeaders(): HttpHeaders {
    const token = this._storageService.getBearerToken();
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  public createAlkalinePhospate(
    alkalinePhosphate: any
  ): Observable<AlkalinePhosphate> {
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
    return this.http.post<AlkalinePhosphate>(
      this.apiServerUrl + '/create',
      mappedAlkalinePhosphate,
      {
        headers,
      }
    );
  }

  setLabTestInvoiceData(alkalinePhosphateData: AlkalinePhosphate) {
    this.alkalinePhosphateDataSubject.next(alkalinePhosphateData);
  }


  public findByAppointmentIdAndLabTestId(
    appointmentId: any | any
  ): Observable<any> {
    const headers = this.getHeaders();
    const responseType = 'json'; // Set your desired response type here

    // Define options for the request
    const options = {
      headers: headers,
      responseType: responseType as 'json', // Cast responseType to avoid compilation errors
    };
    return this.http.get<AlkalinePhosphate>(
      `${this.apiServerUrl}/by-appointment-and-lab-test?appointmentId=${appointmentId}`,
      options
    );
  }

  public getAlkalinePhosphateByID(id: string | any): Observable<any> {
    const headers = this.getHeaders();
    const responseType = 'json'; // Set your desired response type here

    // Define options for the request
    const options = {
      headers: headers,
      responseType: responseType as 'json', // Cast responseType to avoid compilation errors
    };
    return this.http.get<AlkalinePhosphate>(
      `${this.apiServerUrl}/${id}`,
      options
    );
  }

  public getAlkalinePhosphateByUserID(id: string | any): Observable<any> {
    const headers = this.getHeaders();
    const responseType = 'json'; // Set your desired response type here

    // Define options for the request
    const options = {
      headers: headers,
      responseType: responseType as 'json', // Cast responseType to avoid compilation errors
    };
    return this.http.get<AlkalinePhosphate>(
      `${this.apiServerUrl}/user/${id}`,
      options
    );
  }
}
