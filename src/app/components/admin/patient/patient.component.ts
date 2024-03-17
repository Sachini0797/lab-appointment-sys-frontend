import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { filter, switchMap } from 'rxjs';
import { DeletePatientComponent } from './delete-patient/delete-patient.component';
import { PatientService } from './service/patient.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-patient',
  standalone: true,
  imports: [CommonModule, RouterModule, SidebarComponent],
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.scss',
})
export class PatientComponent implements OnInit {
  sidebarExpanded = true;
  text:String = 'The text';
  public patients: any[]= [];
  patientID: string = '';

  constructor(protected modalService: NgbModal, private patientService: PatientService) {}
  ngOnInit(): void {

    this.patientService.getPatients().subscribe(
      (response: any[]) => {
        this.patients = response;
        console.log("patients: ",this.patients);
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }
  // delete(): void {
  //   const modalRef = this.modalService.open(DeletePatientComponent, { size: 'lg', backdrop: 'static' });

  //   // modalRef.componentInstance.userProfile;
  //   // unsubscribe not needed because closed completes on modal close
  //   modalRef.closed;
  // }

  delete(id: string) {
    // const modalRef = this.modalService.open(ModalComponent);
    const modalRef = this.modalService.open(DeletePatientComponent);
    modalRef.componentInstance.id = id;
  }
}
