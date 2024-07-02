import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { StorageService } from '../../../../core/auth/storage.service';
import { LabTechnician } from '../technician.model';

@Injectable({
  providedIn: 'root',
})
export class TechnicianService {
  private apiServerUrl = 'http://localhost:8080/api/admin/technician';

  constructor(
    private http: HttpClient,
    private _storageService: StorageService
  ) {}

  private getHeaders(): HttpHeaders {
    const token = this._storageService.getBearerToken();
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  public getTeschnician(): Observable<any[]> {
    const headers = this.getHeaders();
    const responseType = 'json'; // Set your desired response type here

    // Define options for the request
    const options = {
      headers: headers,
      responseType: responseType as 'json', // Cast responseType to avoid compilation errors
    };
    return this.http.get<any[]>(`${this.apiServerUrl}/all`, options);
  }

  createTechnician(technician: LabTechnician): Observable<LabTechnician> {
    const headers = this.getHeaders();

    return this.http
      .post<LabTechnician>(`${this.apiServerUrl}/create`, technician, {
        headers,
      })
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any): Observable<any> {
    console.error('An error occurred:', error);
    return throwError(error); // Returning throwError to propagate the error
  }

  public deleteTechnician(id: string): Observable<void> {
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
