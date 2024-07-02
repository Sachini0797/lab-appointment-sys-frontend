import { Component, OnInit } from '@angular/core';
import { ReportDetailsSectionComponent } from '../report-details-section/report-details-section.component';
import { ActivatedRoute } from '@angular/router';
import { AppointmentService } from '../../appointment/service/appointment.service';
import { AlkalinePhosphateService } from './alkaline-phosphate.service';
import { AlkalinePhosphate } from './alkaline-phosphate.model';
import { Appointment } from '../../appointment/appointment.model';

@Component({
  selector: 'app-alkaline-phosphate',
  standalone: true,
  templateUrl: './alkaline-phosphate.component.html',
  styleUrl: './alkaline-phosphate.component.scss',
  imports: [ReportDetailsSectionComponent],
})
export class AlkalinePhosphateComponent implements OnInit {
  alkalinePhosphate!: AlkalinePhosphate;
  alkalinePhosphateId!: string | null;
  appointment!: Appointment;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private alkalinePhosphateService: AlkalinePhosphateService,
    private appointmentService: AppointmentService
  ) {}
  ngOnInit(): void {
    this.alkalinePhosphateId = this._activatedRoute.snapshot.paramMap.get('id');
    console.log(this.alkalinePhosphateId);

    this.alkalinePhosphateService
      .getAlkalinePhosphateByID(this.alkalinePhosphateId)
      .subscribe((f: AlkalinePhosphate) => {
        console.log(f);
        this.alkalinePhosphate = f;

        this.appointmentService
          .getAppointmentByID(this.alkalinePhosphate.appointmentId)
          .subscribe((res: Appointment) => {
            console.log(res);
            this.appointment = res;
          });
      });
  }
}
