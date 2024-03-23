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
import { PatientService } from '../../patient/service/patient.service';
import { LabTestsService } from '../../lab-tests/service/lab-tests.service';
import { DoctorService } from '../../doctor/service/doctor.service';



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
  patients!: any[];
  labTestsList: any[] = [];
  doctors: any[] =[];

 
  constructor(
    private formBuilder: FormBuilder,
    private appointmentService: AppointmentService,
    private patientService: PatientService,
    private labTestsService: LabTestsService,
    private doctorService: DoctorService,
  ) {}

  ngOnInit(): void {
    this.appointmentForm = this.formBuilder.group({
      id: [''], 
      name: [''], 
      appointmentDate: [''], 
      startTime: [''], 
      endTime: [''], 
      user: this.formBuilder.group({
        id: [''],
        email: [''] 
      }),
      doctor: this.formBuilder.group({
        id: [''] 
      }),
      labTechnician: this.formBuilder.group({
        id: [''] 
      }),
       labTests: this.formBuilder.array([]),
    });

    this.patientService.getPatients().subscribe((res) => {
      this.patients = res.filter(patient => {
        return !patient.roles.some((role:any) => role.name === 'ROLE_ADMIN');      
      })
      console.log("patients",this.patients);
    });

    this.labTestsService.getLabTestsa().subscribe((res) => {
      this.labTestsList = res;
      console.log("tests", this.labTestsList)
    });

    this.doctorService.getdoctors().subscribe((res) => {
      this.doctors = res;
    })


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

      // const appointment: Appointment = this.appointmentForm.getRawValue();
      // appointment.name = this.appointmentForm.get("name")?.value;
      console.log(this.appointmentForm.get('name')?.value);

      this.appointmentService.createAppointment(appointmentData).subscribe(
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
    window.history.back();
  }
}
