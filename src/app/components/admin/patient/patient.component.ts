import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { filter, switchMap } from 'rxjs';
import { DeletePatientComponent } from './delete-patient/delete-patient.component';
import { PatientService } from './service/patient.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ListPatientComponent } from './list-patient/list-patient.component';

@Component({
  selector: 'app-patient',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.scss',
  // encapsulation: ViewEncapsulation.None,
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PatientComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}
