import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from '../../../../core/auth/storage.service';

@Injectable({
  providedIn: 'root'
})
export class LabTestInvoiceService {

  private apiServerUrl = 'http://localhost:8080/api/admin/labTestInvoice';

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
  }}
