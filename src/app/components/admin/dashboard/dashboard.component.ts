import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { AccountService } from '../../../core/auth/account.service';
import { UserRoleService } from '../../../core/auth/user-role.service';
import { StorageService } from '../../../core/auth/storage.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, SidebarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit{
  sidebarExpanded = true;
  content?: string;
  constructor(private userRoleService: UserRoleService, private storageService: StorageService, private router: Router) {}

  ngOnInit(): void {
    if(this.storageService.getUser().roles[0] !== "ROLE_ADMIN"){
      this.router.navigate(['/login']);
    } 
     this.userRoleService.getAdminBoard().subscribe({
      next: data => {
        this.content = data;
      },
      error: err => {console.log(err)
        if (err.error) {
          this.content = JSON.parse(err.error).message;
        } else {
          this.content = "Error with status: " + err.status;
        }
      }
    });
  }
}
