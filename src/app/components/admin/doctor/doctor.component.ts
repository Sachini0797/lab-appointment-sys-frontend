import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DoctorService } from './service/doctor.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-doctor',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './doctor.component.html',
  styleUrl: './doctor.component.scss',
})
export class DoctorComponent implements OnInit {
  sidebarExpanded = true;
  public doctors: any[] = [];

  constructor() {}

  ngOnInit(): void {
    
   }
}
