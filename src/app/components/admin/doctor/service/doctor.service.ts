import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { StorageService } from '../../../../core/auth/storage.service';
import { Doctor } from '../doctor.model';

@Injectable({
  providedIn: 'root',
})
export class DoctorService {
  private apiServerUrl = 'http://localhost:8080/api/admin/doctor';

  constructor(
    private http: HttpClient,
    private _storageService: StorageService
  ) {}

  private getHeaders(): HttpHeaders {
    const token = this._storageService.getBearerToken();
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  public getdoctors(): Observable<any[]> {
    const headers = this.getHeaders();
    const responseType = 'json'; // Set your desired response type here

    // Define options for the request
    const options = {
      headers: headers,
      responseType: responseType as 'json', // Cast responseType to avoid compilation errors
    };
    return this.http.get<any[]>(`${this.apiServerUrl}/all`, options);
  }

  getDoctor(id: string): Observable<any> {
    const headers = this.getHeaders();
    const responseType = 'json'; // Set your desired response type here

    // Define options for the request
    const options = {
      headers: headers,
      responseType: responseType as 'json', // Cast responseType to avoid compilation errors
    };
    return this.http.get<any>(`${this.apiServerUrl}/${id}`, options);
  }

  createDoctor(doctor: Doctor): Observable<Doctor> {
    const headers = this.getHeaders();

    return this.http.post<Doctor>(`${this.apiServerUrl}/create`, doctor, {headers})
      .pipe(
        catchError(this.handleError)
      );
  }

  updateDoctor(id: number, doctor: Doctor): Observable<Doctor> {
    const headers = this.getHeaders();

    return this.http.put<Doctor>(`${this.apiServerUrl}/update/${id}`, doctor, {headers})
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any): Observable<any> {
    console.error('An error occurred:', error);
    return throwError(error); // Returning throwError to propagate the error
  }

  public deleteDoctor(id: string): Observable<void> {
    const headers = this.getHeaders();
    const responseType = 'json'; // Set your desired response type here

    // Define options for the request
    const options = {
      headers: headers,
      responseType: responseType as 'json', // Cast responseType to avoid compilation errors
    };
    return this.http.delete<void>(`${this.apiServerUrl}/${id}`, options);
  }
}
