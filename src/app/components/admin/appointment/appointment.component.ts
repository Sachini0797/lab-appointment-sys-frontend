import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { AppointmentService } from './service/appointment.service';
import { DeleteAppointmentComponent } from './delete-appointment/delete-appointment.component';

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [CommonModule, RouterModule, SidebarComponent, NgbModalModule],
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
      (error: any) => {
        console.log(error.message);
      }
    );
   }

   delete(id: string) {
    // const modalRef = this.modalService.open(ModalComponent);
    console.log("mm")
    const modalRef = this.modalService.open(DeleteAppointmentComponent);
    modalRef.componentInstance.id = id;
  }
}
