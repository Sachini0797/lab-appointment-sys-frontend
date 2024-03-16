import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DeleteLabTestInvoiceComponent } from './delete-lab-test-invoice/delete-lab-test-invoice.component';

@Component({
  selector: 'app-lab-test-invoice',
  standalone: true,
  imports: [SidebarComponent, CommonModule, RouterModule],
  templateUrl: './lab-test-invoice.component.html',
  styleUrl: './lab-test-invoice.component.scss'
})
export class LabTestInvoiceComponent {
  sidebarExpanded = true;
  constructor(protected modalService: NgbModal){}
   delete() {
     // const modalRef = this.modalService.open(ModalComponent);
     const modalRef = this.modalService.open(DeleteLabTestInvoiceComponent);
     modalRef.componentInstance.title = 'About';
 
   }
}
