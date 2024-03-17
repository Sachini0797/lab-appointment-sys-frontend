// role-auth.guard.ts
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { StorageService } from '../auth/storage.service';

@Injectable({
  providedIn: 'root',
})
export class RoleAuthGuard implements CanActivate {
  constructor(
    private storageService: StorageService,
    private router: Router,
    route: ActivatedRouteSnapshot
  ) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    // const user = this.storageService.getUser();
    // Example: Check if user has admin role

    const user = this.storageService.getUser();
    const requestedRoles = route.data['roles']; // Access required roles from route data

    if (user && requestedRoles) {
      // Check if user has any of the required roles for the current route
      if (requestedRoles.includes(user.role)) {
        return true; // Allow access if the user has any of the required roles
      } else {
        this.router.navigate(['/access-denied']); // Redirect unauthorized access
        return false;
      }
    } else {
      this.router.navigate(['/login']); // Redirect unauthenticated users
      return false;
    }
  }
}
