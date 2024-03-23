import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { TechnicianService } from './service/technician.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-technician',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './technician.component.html',
  styleUrl: './technician.component.scss'
})
export class TechnicianComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
   
   }
}