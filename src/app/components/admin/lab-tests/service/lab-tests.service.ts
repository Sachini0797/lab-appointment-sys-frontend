import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from '../../../../core/auth/storage.service';
import { Observable } from 'rxjs/internal/Observable';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable({
  providedIn: 'root',
})
export class LabTestsService {
  private apiServerUrl = 'http://localhost:8080/api/admin/labtests';

  constructor(
    private http: HttpClient,
    private _storageService: StorageService
  ) {}

  private getHeaders(): HttpHeaders {
    const token = this._storageService.getBearerToken();
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  public getLabTestsa(): Observable<any[]> {
    const headers = this.getHeaders();
    const responseType = 'json'; // Set your desired response type here

    // Define options for the request
    const options = {
      headers: headers,
      responseType: responseType as 'json', // Cast responseType to avoid compilation errors
    };
    return this.http.get<any[]>(`${this.apiServerUrl}/all`, options);
  }

  public createLabTest(
    testName: string,
    testShortName: string,
    testNo: number,
    finalAmount: number,
    amount: number,
    remarks: string,
    percentage: number,
    discount: number
  ): Observable<any> {
    const headers = this.getHeaders();
    const responseType = 'json'; // Set your desired response type here

    // Define options for the request
    const options = {
      headers: headers,
      responseType: responseType as 'json', // Cast responseType to avoid compilation errors
    };
    return this.http.post(
      this.apiServerUrl + '/create',
      {
        testName,
        testShortName,
        testNo,
        finalAmount,
        amount,
        remarks,
        percentage,
        discount,
      },
      options
    );
  }
}
