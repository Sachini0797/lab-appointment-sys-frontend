import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { SidebarComponent } from '../../../sidebar/sidebar.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeletePatientComponent } from '../delete-patient/delete-patient.component';
import { PatientService } from '../service/patient.service';

@Component({
  selector: 'app-list-patient',
  standalone: true,
  imports: [CommonModule, RouterModule, SidebarComponent, RouterOutlet],
  templateUrl: './list-patient.component.html',
  styleUrl: './list-patient.component.scss',
})
export class ListPatientComponent implements OnInit {
  sidebarExpanded = true;
  text: String = 'The text';
  public patients: any[] = [];
  patientID: string = '';

  constructor(
    protected modalService: NgbModal,
    private patientService: PatientService,
    private route: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.patientService.getPatients().subscribe(
      (response: any[]) => {
        this.patients = response.filter((patient) => {
          return !patient.roles.some((role: any) => role.name === 'ROLE_ADMIN');
        });
        console.log('patients: ', this.patients);
      },
      (error: any) => {
        console.log(error.message);
      }
    );
  }

  delete(id: string) {
    const modalRef = this.modalService.open(DeletePatientComponent);
    modalRef.componentInstance.id = id;
  }

  createPatient(): void {
    this.route.navigate(['./', 'create'], { relativeTo: this.activatedRoute });

  }
}
