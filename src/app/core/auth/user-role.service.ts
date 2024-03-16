import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';

const API_URL = 'http://localhost:8080/api/test/';
@Injectable({
  providedIn: 'root',
})
export class UserRoleService {
  bToken: string | null = '';
  //inject storage service mataka na lol
  constructor(
    private http: HttpClient,
    private _storageService: StorageService
  ) {
    // this.bToken = this._storageService.getBearerToke();
  }

  private getHeaders(): HttpHeaders {
    const token = this._storageService.getBearerToken();
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  getUserBoard(): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.bToken}`,
    });
    return this.http.get(API_URL + 'user', {
      responseType: 'text',
      headers: this.getHeaders(),
    });
  }
  getModeratorBoard(): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.bToken}`,
    });
    return this.http.get(API_URL + 'mod', {
      responseType: 'text',
      headers: this.getHeaders(),
    });
  }

  getAdminBoard(): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.bToken}`,
    });
    return this.http.get(API_URL + 'admin', {
      responseType: 'text',
      headers: this.getHeaders(),
    });
  }
}
