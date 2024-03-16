import { Component, OnInit } from '@angular/core';
import { UserRoleService } from '../../../core/auth/user-role.service';

@Component({
  selector: 'app-patient-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './patient-dashboard.component.html',
  styleUrl: './patient-dashboard.component.scss',
})
export class PatientDashboardComponent implements OnInit {
  content?: string;
  constructor(private userRoleService: UserRoleService) {}

  ngOnInit(): void {
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
  }
}
