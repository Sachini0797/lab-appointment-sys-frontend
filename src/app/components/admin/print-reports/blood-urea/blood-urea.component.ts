import { Component, OnInit } from '@angular/core';
import { ReportDetailsSectionComponent } from '../report-details-section/report-details-section.component';
import { Appointment } from '../../appointment/appointment.model';
import { BloodUrea } from './blood-urea.model';
import { ActivatedRoute } from '@angular/router';
import { AppointmentService } from '../../appointment/service/appointment.service';
import { AlkalinePhosphateService } from '../alkaline-phosphate/alkaline-phosphate.service';
import { BloodUreaService } from './blood-urea.service';

@Component({
  selector: 'app-blood-urea',
  standalone: true,
  imports: [ReportDetailsSectionComponent],
  templateUrl: './blood-urea.component.html',
  styleUrl: './blood-urea.component.scss',
})
export class BloodUreaComponent implements OnInit {
  appointment!: Appointment;
  bloodUrea!: BloodUrea;
  bloodUreaId!: string | null;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private bloodUreaService: BloodUreaService,
    private appointmentService: AppointmentService
  ) {}
  ngOnInit(): void {
    this.bloodUreaId = this._activatedRoute.snapshot.paramMap.get('id');
    console.log(this.bloodUreaId);

    this.bloodUreaService
      .getBloodUreaByID(this.bloodUreaId)
      .subscribe((f: BloodUrea) => {
        console.log(f);
        this.bloodUrea = f;

        this.appointmentService
          .getAppointmentByID(this.bloodUrea.appointmentId)
          .subscribe((res: Appointment) => {
            console.log(res);
            this.appointment = res;
          });
      });
  }
}
