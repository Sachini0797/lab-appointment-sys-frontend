import { Component, OnInit } from '@angular/core';
import { UserRoleService } from '../../../core/auth/user-role.service';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { Router } from '@angular/router';
import { StorageService } from '../../../core/auth/storage.service';

@Component({
  selector: 'app-patient-dashboard',
  standalone: true,
  imports: [CommonModule, SidebarComponent],
  templateUrl: './patient-dashboard.component.html',
  styleUrl: './patient-dashboard.component.scss',
})
export class PatientDashboardComponent implements OnInit {
  sidebarExpanded = true;
  content?: string;
  todayRealtimeDate: number = Date.now();
  user: any;

  constructor(private userRoleService: UserRoleService,private storageService: StorageService, private router: Router) {}

  ngOnInit(): void {
    if(this.storageService.getUser().roles[0] !== "ROLE_USER"){
      this.router.navigate(['/login']);
    }

    

    this.userRoleService.getUserBoard().subscribe({
      next: (data) => {
        this.content = data;
      },
      error: (err) => {
        console.log(err);
        if (err.error) {
          this.content = JSON.parse(err.error).message;
        } else {
          this.content = 'Error with status: ' + err.status;
        }
      },
    });
    setInterval(() => {
      this.todayRealtimeDate = Date.now();
    }, 1);
  }
}
