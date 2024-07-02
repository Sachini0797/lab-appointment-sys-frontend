import { Component, Input } from '@angular/core';
import { Appointment } from '../../appointment/appointment.model';
import { AlkalinePhosphate } from '../alkaline-phosphate/alkaline-phosphate.model';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-report-details-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './report-details-section.component.html',
  styleUrl: './report-details-section.component.scss',
  providers: [DatePipe]
})
export class ReportDetailsSectionComponent {
  @Input()
  appointment!: Appointment;
  @Input()
  result!: any;

  currentDate!: Date;
  constructor(private datePipe: DatePipe) {
    // Initialize the currentDate property within the constructor
    this.currentDate = new Date();
  }

  get formattedDate(): string | null {
    return this.datePipe.transform(this.currentDate, 'MMMM d, yyyy, hh:mma'); // Format as YYYY-MM-DD
  }
}
