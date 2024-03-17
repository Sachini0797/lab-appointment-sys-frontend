import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient) {}

  register(
    username: string,
    email: string,
    password: string,
    firstName: string,
    designation: string,
    lastName: string,
    gender: string,
    nic: string,
    phoneNum: string,
    address: string,
    city: string, 
    age: string,
    dob: string,
    maritalStatus: string,
    registeredDate: string,
    weight: string,
    height: string
  ): Observable<any> {
    return this.http.post(
      AUTH_API + 'signup',
      {
        username,
        email,
        password,
        firstName,
        designation,
        lastName,
        gender,
        nic,
        phoneNum,
        address,
        city,
        age,
        dob,
        maritalStatus,
        registeredDate,
        weight,
        height,
      },
      httpOptions
    );
  }
}
