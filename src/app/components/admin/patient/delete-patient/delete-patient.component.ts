import { Component } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-delete-patient',
  standalone: true,
  imports: [],
  templateUrl: './delete-patient.component.html',
  styleUrl: './delete-patient.component.scss'
})
export class DeletePatientComponent {

  constructor(protected activeModal: NgbModal) {}

  cancel(): void {
    this.activeModal.dismissAll();
  }

  confirmDelete(): void {
    

  }


}
