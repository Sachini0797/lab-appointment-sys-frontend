import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PatientService } from '../../patient/service/patient.service';
import { AppointmentService } from '../service/appointment.service';

@Component({
  selector: 'app-delete-appointment',
  standalone: true,
  imports: [],
  templateUrl: './delete-appointment.component.html',
  styleUrl: './delete-appointment.component.scss'
})
export class DeleteAppointmentComponent implements OnInit{
  @Input() id!: string;
  constructor(
    protected activeModal: NgbModal,
    private appointmentService: AppointmentService
  ) {}
  ngOnInit(): void {
    console.log(this.id);
  }

  cancel(): void {
    this.activeModal.dismissAll();
    
  }

  confirmDelete(): void {
    console.log('idd', this.id);
    // this.patientService.deleteEmployee(this.id).subscribe();
    this.appointmentService.deleteappointment(this.id ).subscribe(
      (response: void) => {
        console.log(response);
        // this.getEmployees();
      },
      (error: any) => {
        alert(error.message);
        console.log("not working");
      }
    );
  }
}
