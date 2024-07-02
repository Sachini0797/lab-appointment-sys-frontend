import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TechnicianService } from '../service/technician.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../../../sidebar/sidebar.component';
import { DeleteComponent } from '../delete/delete.component';

@Component({
  selector: 'app-list-technician',
  standalone: true,
  imports: [CommonModule,RouterModule, SidebarComponent],
  templateUrl: './list-technician.component.html',
  styleUrl: './list-technician.component.scss'
})
export class ListTechnicianComponent implements OnInit {
  sidebarExpanded = true;
  public technicians: any[] = [];

  constructor(protected modalService: NgbModal, private technicianService: TechnicianService) {}

  ngOnInit(): void {
    this.technicianService.getTeschnician().subscribe(
      (response: any[]) => {
        this.technicians = response;
        console.log('lab tests: ', this.technicians);
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
   }

   delete(id: string) {
    const modalRef = this.modalService.open(DeleteComponent);
    modalRef.componentInstance.id = id;
  }
}