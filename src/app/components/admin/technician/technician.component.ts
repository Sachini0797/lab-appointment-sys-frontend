import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { TechnicianService } from './service/technician.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-technician',
  standalone: true,
  imports: [CommonModule,RouterModule, SidebarComponent],
  templateUrl: './technician.component.html',
  styleUrl: './technician.component.scss'
})
export class TechnicianComponent implements OnInit {
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
}