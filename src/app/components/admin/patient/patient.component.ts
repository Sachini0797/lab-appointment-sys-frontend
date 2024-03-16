import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { filter, switchMap } from 'rxjs';
import { DeletePatientComponent } from './delete-patient/delete-patient.component';

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

  constructor(protected modalService: NgbModal) {}
  ngOnInit(): void {}
  // delete(): void {
  //   const modalRef = this.modalService.open(DeletePatientComponent, { size: 'lg', backdrop: 'static' });

  //   // modalRef.componentInstance.userProfile;
  //   // unsubscribe not needed because closed completes on modal close
  //   modalRef.closed;
  // }

  delete() {
    // const modalRef = this.modalService.open(ModalComponent);
    const modalRef = this.modalService.open(DeletePatientComponent);
    modalRef.componentInstance.title = 'About';

  }
}
