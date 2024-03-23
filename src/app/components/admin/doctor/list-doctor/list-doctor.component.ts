import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DoctorService } from '../service/doctor.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../../../sidebar/sidebar.component';

@Component({
  selector: 'app-list-doctor',
  standalone: true,
  imports: [CommonModule, RouterModule, SidebarComponent],
  templateUrl: './list-doctor.component.html',
  styleUrl: './list-doctor.component.scss'
})
export class ListDoctorComponent implements OnInit {
  sidebarExpanded = true;
  public doctors: any[] = [];

  constructor(protected modalService: NgbModal, private doctorService: DoctorService) {}

  ngOnInit(): void {
    this.doctorService.getdoctors().subscribe(
      (response: any[]) => {
        this.doctors = response;
        console.log("doctors: ",this.doctors);
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
   }

}
