import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StorageService } from '../../../../core/auth/storage.service';
import { LabTestInvoice } from '../lab-test-invoice.model';

@Injectable({
  providedIn: 'root',
})
export class LabTestInvoiceService {
  private apiServerUrl = 'http://localhost:8080/api/admin/labTestInvoice';
  private labTestInvoiceDataSubject =
    new BehaviorSubject<LabTestInvoice | null>(null);
  constructor(
    private http: HttpClient,
    private _storageService: StorageService
  ) {}

  private getHeaders(): HttpHeaders {
    const token = this._storageService.getBearerToken();
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  public getLabTestsInvoice(): Observable<any[]> {
    const headers = this.getHeaders();
    const responseType = 'json'; // Set your desired response type here

    // Define options for the request
    const options = {
      headers: headers,
      responseType: responseType as 'json', // Cast responseType to avoid compilation errors
    };
    return this.http.get<any[]>(`${this.apiServerUrl}/all`, options);
  }
  public createLabTestInvoice(labTestInvoice: any): Observable<LabTestInvoice> {
    const headers = this.getHeaders();

    const mappedAppointment = {
      appointment: { id: labTestInvoice.appointment.id },
      generatedAt: labTestInvoice.generatedAt,
      billAmount: labTestInvoice.billAmount,
      discount: labTestInvoice.discount,
      totalAmount: labTestInvoice.totalAmount,
      paidAmount: labTestInvoice.paidAmount,
      dueAmount: labTestInvoice.dueAmount,
      remarks: labTestInvoice.remarks,
      paymentStatus: labTestInvoice.paymentStatus,
    };

    console.log('a serv', labTestInvoice);
    return this.http.post<LabTestInvoice>(
      this.apiServerUrl + '/create',
      mappedAppointment,
      {
        headers,
      }
    );
  }

  setLabTestInvoiceData(labTestInvoiceData: LabTestInvoice) {
    this.labTestInvoiceDataSubject.next(labTestInvoiceData);
  }

  public getLabTestInvoiceByID(id: string | any): Observable<any> {
    const headers = this.getHeaders();
    const responseType = 'json'; // Set your desired response type here

    // Define options for the request
    const options = {
      headers: headers,
      responseType: responseType as 'json', // Cast responseType to avoid compilation errors
    };
    
    return this.http.get<LabTestInvoice>(`${this.apiServerUrl}/${id}`, options);
  }
}
