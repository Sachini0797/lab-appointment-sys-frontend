import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { StorageService } from '../../../../core/auth/storage.service';
import { UserUpdateRequest } from '../patient.model';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  private apiServerUrl = 'http://localhost:8080/api/admin';
  private apiServerUpdateUrl = 'http://localhost:8080/api/auth';

  constructor(
    private http: HttpClient,
    private _storageService: StorageService
  ) {}

  private getHeaders(): HttpHeaders {
    const token = this._storageService.getBearerToken();
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  public getPatients(): Observable<any[]> {
    const headers = this.getHeaders();
    const responseType = 'json'; // Set your desired response type here

    // Define options for the request
    const options = {
      headers: headers,
      responseType: responseType as 'json', // Cast responseType to avoid compilation errors
    };
    return this.http.get<any[]>(`${this.apiServerUrl}/user-profiles`, options);
  }

  getPatient(id: string): Observable<any> {
    const headers = this.getHeaders();
    const responseType = 'json'; // Set your desired response type here

    // Define options for the request
    const options = {
      headers: headers,
      responseType: responseType as 'json', // Cast responseType to avoid compilation errors
    };
    return this.http.get<any>(`${this.apiServerUrl}/user/${id}`, options);
  }

  public deletePatient(id: string): Observable<void> {
    const headers = this.getHeaders();
    const responseType = 'json'; // Set your desired response type here

    // Define options for the request
    const options = {
      headers: headers,
      responseType: responseType as 'json', // Cast responseType to avoid compilation errors
    };
    return this.http.delete<void>(`${this.apiServerUrl}/user/${id}`, options);
  }

  updateUser(
    userId: number,
    patient: UserUpdateRequest
  ): Observable<UserUpdateRequest> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    return this.http
      .put<UserUpdateRequest>(
        `${this.apiServerUpdateUrl}/users/${userId}`,
        patient,
        httpOptions
      )
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    return throwError('Something went wrong; please try again later.');
  }
}
function throwError(arg0: string): Observable<never> {
  throw new Error('Function not implemented.');
}
