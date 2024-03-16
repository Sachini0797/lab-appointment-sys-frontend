import { Injectable } from '@angular/core';

const USER_KEY = 'auth-user';
const TOKEN_KEY = 'auth-token';
@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}
  clean(): void {
    window.sessionStorage.clear();
    sessionStorage.removeItem(TOKEN_KEY);
    sessionStorage.removeItem(USER_KEY);
  }
  // public getBearerToke() {
  //   const x = window.sessionStorage.getItem('token');

  //   return x;
  // }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    console.log('user test', user);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }


  public saveBearerToken(token: string): void {
    sessionStorage.setItem('token', token);
  }

  public getBearerToken(): string | null {
    return sessionStorage.getItem('token');
  }

  public isLoggedIn(): boolean {
    const user = window.sessionStorage.getItem(USER_KEY);

    if (user) {
      return true;
    }
    return false;
  }
}
