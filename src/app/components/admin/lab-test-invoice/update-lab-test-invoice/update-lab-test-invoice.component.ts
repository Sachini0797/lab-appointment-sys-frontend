import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
  FormArray,
  UntypedFormGroup,
  UntypedFormArray,
} from '@angular/forms';
import { SidebarComponent } from '../../../sidebar/sidebar.component';
import { AppointmentService } from '../../appointment/service/appointment.service';
import { Appointment, LabTest } from '../../appointment/appointment.model';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-update-lab-test-invoice',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SidebarComponent,
    FontAwesomeModule,
  ],
  templateUrl: './update-lab-test-invoice.component.html',
  styleUrl: './update-lab-test-invoice.component.scss',
})
export class UpdateLabTestInvoiceComponent {
  sidebarExpanded = true;
  editForm!: UntypedFormGroup;
  isSaving = false;
  appointment!: Appointment;
  faDelete = faTrash;

  constructor(
    private appointmentService: AppointmentService,
    private formBuilder: FormBuilder
  ) {}
  ngOnInit(): void {
    this.appointmentService.appointmentData$.subscribe((appointmentData) => {
      if (appointmentData) {
        // Use the appointment data here
        this.appointment = appointmentData;
        console.log('Appointment data in invoice component:', appointmentData);

        const labTestsFormArray = this.editForm.get('appointment.labTests') as UntypedFormArray;
        labTestsFormArray.clear();

        appointmentData.labTests.forEach((labTest: LabTest) => {
          labTestsFormArray.push(this.formBuilder.group({
            id: labTest.id,
            // Add other properties of lab test if needed
          }));
        });
      }
    });

    this.editForm = this.formBuilder.group({
      id: [''],
      appointment: this.formBuilder.group({
        id: this.appointment.id,
        name: this.appointment.name,
        appointmentDate: this.appointment.appointmentDate,
        startTime: this.appointment.startTime,
        endTime: this.appointment.endTime,
        user: this.formBuilder.group({
          id: this.appointment.user.id,
          email: this.appointment.user.email,
          firstName: this.appointment.user.firstName,
          lastName: this.appointment.user.lastName,
          phoneNum: this.appointment.user.phoneNum,
        }),
        doctor: this.formBuilder.group({
          id: this.appointment.doctor.id,
          designation: this.appointment.doctor.designation,
          name: this.appointment.doctor.name,
          position: this.appointment.doctor.position,
        }),
        labTechnician: this.formBuilder.group({
          id: this.appointment.labTechnician.id,
          name: this.appointment.labTechnician.name,
        }),
        labTests: this.formBuilder.array([]),
      }),
      billAmount: [''],
      totalAmount: [''],
      paidAmount: [''],
      dueAmount: [''],
      remarks: [''],
      generatedAt: [Date.now()],
    });

    console.log(this.editForm.value, 'value after upadting my edit form');
  }

  save() {}

  previousState() {
    window.history.back();
  }
}
