import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DeleteLabTestInvoiceComponent } from './delete-lab-test-invoice/delete-lab-test-invoice.component';
import { LabTestInvoiceService } from './service/lab-test-invoice.service';

@Component({
  selector: 'app-lab-test-invoice',
  standalone: true,
  imports: [SidebarComponent, CommonModule, RouterModule],
  templateUrl: './lab-test-invoice.component.html',
  styleUrl: './lab-test-invoice.component.scss'
})
export class LabTestInvoiceComponent implements OnInit{
  sidebarExpanded = true;
  public labTestsInvoice!: any[] ;

  constructor(protected modalService: NgbModal, private labtestInvoiceService: LabTestInvoiceService){}
  ngOnInit(): void {
    this.labtestInvoiceService.getLabTestsInvoice().subscribe(
      (response: any[]) => {
        this.labTestsInvoice = response;
        console.log('lab tests: ', this.labTestsInvoice);
        console.log('lab tests appointment: ', this.labTestsInvoice.map(i => i.appointment.id));
      },
      (error: any) => {
        console.log(error.message);
      }
    );  }

   delete() {
     // const modalRef = this.modalService.open(ModalComponent);
     const modalRef = this.modalService.open(DeleteLabTestInvoiceComponent);
     modalRef.componentInstance.title = 'About';
 
   }
}
