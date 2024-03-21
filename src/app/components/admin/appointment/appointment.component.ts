import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppointmentService } from './service/appointment.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [CommonModule, RouterModule, SidebarComponent],
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.scss'
})
export class AppointmentComponent implements OnInit{
  sidebarExpanded = true;
  public appointments: any[] = [];

  constructor(protected modalService: NgbModal, private doctorService: AppointmentService) {}

  ngOnInit(): void {
    this.doctorService.getAppointments().subscribe(
      (response: any[]) => {
        this.appointments = response;
        console.log("appointments: ",this.appointments);
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
   }
}
