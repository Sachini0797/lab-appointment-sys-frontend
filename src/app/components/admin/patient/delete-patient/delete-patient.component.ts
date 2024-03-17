import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PatientService } from '../service/patient.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-delete-patient',
  standalone: true,
  imports: [],
  templateUrl: './delete-patient.component.html',
  styleUrl: './delete-patient.component.scss',
})
export class DeletePatientComponent implements OnInit{
  @Input() id!: string;
  constructor(
    protected activeModal: NgbModal,
    private patientService: PatientService
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
    this.patientService.deletePatient(this.id ).subscribe(
      (response: void) => {
        console.log(response);
        // this.getEmployees();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        console.log("not working");
      }
    );
  }
}
