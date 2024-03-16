import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-lab-test-invoice',
  standalone: true,
  imports: [],
  templateUrl: './delete-lab-test-invoice.component.html',
  styleUrl: './delete-lab-test-invoice.component.scss'
})
export class DeleteLabTestInvoiceComponent {
  constructor(protected activeModal: NgbModal) {}

  cancel(): void {
    this.activeModal.dismissAll();
  }

  confirmDelete(): void {
    

  }
}
