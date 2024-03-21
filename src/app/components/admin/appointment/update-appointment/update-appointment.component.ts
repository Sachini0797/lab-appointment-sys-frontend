import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  FormArray,
} from '@angular/forms';
import { AppointmentService } from '../service/appointment.service';
import { Appointment } from '../appointment.model';

@Component({
  selector: 'app-update-appointment',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './update-appointment.component.html',
  styleUrl: './update-appointment.component.scss',
})
export class UpdateAppointmentComponent {
  appointmentForm!: FormGroup;
  isSaving: boolean = false;
 
  constructor(
    private formBuilder: FormBuilder,
    private appointmentService: AppointmentService
  ) {}

  ngOnInit(): void {
    this.appointmentForm = this.formBuilder.group({
      id: [''], // For ID
      name: [''], // For Patient's Name
      appointmentDate: [''], // For Appointment Date
      startTime: [''], // For Start Time
      endTime: [''], // For End Time
      user: this.formBuilder.group({
        id: [''] // Assuming user ID is required
      }),
      doctor: this.formBuilder.group({
        id: [''] // Assuming doctor ID is required
      }),
      labTechnician: this.formBuilder.group({
        id: [''] // Assuming lab technician ID is required
      }),
      // Form array for lab tests
      labTests: this.formBuilder.array([]),
    });
  }

  // Convenience getter for easy access to form array
  get labTests(): FormArray {
    return this.appointmentForm.get('labTests') as FormArray;
  }

  // Add a new lab test to the form array
  addLabTest(): void {
    this.labTests.push(this.createLabTest());
  }

  // Remove lab test at specified index
  removeLabTest(index: number): void {
    this.labTests.removeAt(index);
  }

  // Create a form group for a lab test
  createLabTest(): FormGroup {
    return this.formBuilder.group({
      id: [''],
      testName: [''],
      testShortName: [''],
      // Add more fields for other lab test details as needed
    });
  }

  save() {
    // if (this.appointmentForm.valid) {
      console.log(this.appointmentForm.value);
      const appointmentData: Appointment = this.appointmentForm.value;

      const appointment: Appointment = this.appointmentForm.getRawValue();

      this.appointmentService.createAppointment(appointment).subscribe(
        (response) => {
          console.log('Appointment created successfully:', response);
          // Handle success response
        },
        (error) => {
          console.error('Error creating appointment:', error);
          // Handle error response
        }
      );
    // } else {
    //   console.log('Form is invalid!');
    // }
  }

  previousState() {
    // Implement navigation to previous state
  }
}
