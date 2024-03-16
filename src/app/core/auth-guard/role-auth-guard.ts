// role-auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { StorageService } from '../auth/storage.service';

@Injectable({
  providedIn: 'root'
})
export class RoleAuthGuard implements CanActivate {

  constructor(private storageService: StorageService, private router: Router) {}

  canActivate(): boolean {
    const user = this.storageService.getUser();
    // Example: Check if user has admin role
    if (user && user.role === 'ADMIN') {
      return true; // Allow access
    } else {
      this.router.navigate(['/access-denied']); // Redirect unauthorized users
      return false;
    }
  }
}
