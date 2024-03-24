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
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faDeleteLeft, faRecycle, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-update-appointment',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, FontAwesomeModule],
  templateUrl: './update-appointment.component.html',
  styleUrl: './update-appointment.component.scss',
})
export class UpdateAppointmentComponent {
  appointmentForm!: FormGroup;
  isSaving: boolean = false;
  patients!: any[];
  labTestsList: any[] = [];
  doctors: any[] = [];

  //icons
  faDelete = faTrash;

  constructor(
    private formBuilder: FormBuilder,
    private appointmentService: AppointmentService,
    private patientService: PatientService,
    private labTestsService: LabTestsService,
    private doctorService: DoctorService,
    private route: Router
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
        email: [''],
        firstName: [''],
        lastName: [''],
        phoneNum: [''],
      }),
      doctor: this.formBuilder.group({
        id: [''],
        designation: [''],
        name: [''],
        position: [''],
      }),
      labTechnician: this.formBuilder.group({
        id: [''],
        name: ['']
      }),
      labTests: this.formBuilder.array([]),
    });

    this.patientService.getPatients().subscribe((res) => {
      this.patients = res.filter((patient) => {
        return !patient.roles.some((role: any) => role.name === 'ROLE_ADMIN');
      });
      console.log('patients', this.patients);
    });

    this.labTestsService.getLabTestsa().subscribe((res) => {
      this.labTestsList = res;
      console.log('tests', this.labTestsList);
    });

    this.doctorService.getdoctors().subscribe((res) => {
      this.doctors = res;
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
      testNo: [''],
      amount: ['']
      // Add more fields for other lab test details as needed
    });
  }

  // const labTestsArray = appointmentData.labTests.map((labTest: any) => {
  //   return this.formBuilder.group({
  //     id: labTest.id,
  //     testName: labTest.testName,
  //     testShortName: labTest.testShortName,
  //   });
  // });

  save() {
    console.log(this.appointmentForm.value);
    const appointmentData: Appointment = this.appointmentForm.value;

    console.log(this.appointmentForm.get('name')?.value);
    

    this.appointmentService.createAppointment(appointmentData).subscribe(
      (response) => {
        console.log('Appointment created successfully:', response);
        this.appointmentService.setAppointmentData(response);
        this.route.navigate(['/admin/lab-tests-invoice/new']);
      },
      (error) => {
        console.error('Error creating appointment:', error);
        // Handle error response
      }
    );
  }

  previousState() {
    // Implement navigation to previous state
    window.history.back();
  }
}
