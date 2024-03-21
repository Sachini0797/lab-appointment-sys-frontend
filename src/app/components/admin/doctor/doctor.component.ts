import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DoctorService } from './service/doctor.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-doctor',
  standalone: true,
  imports: [CommonModule, RouterModule, SidebarComponent],
  templateUrl: './doctor.component.html',
  styleUrl: './doctor.component.scss',
})
export class DoctorComponent implements OnInit {
  sidebarExpanded = true;
  public doctors: any[] = [];

  constructor(protected modalService: NgbModal, private doctorService: DoctorService) {}

  ngOnInit(): void {
    this.doctorService.getdoctors().subscribe(
      (response: any[]) => {
        this.doctors = response;
        console.log("doctors: ",this.doctors);
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
   }
}
