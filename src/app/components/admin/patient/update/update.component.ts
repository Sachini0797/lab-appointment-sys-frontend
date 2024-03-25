import { CommonModule, JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormGroup,
} from '@angular/forms';
import { SidebarComponent } from '../../../sidebar/sidebar.component';
import {
  NgbAlertModule,
  NgbDateStruct,
  NgbDatepickerModule,
} from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCalendar, faHeart } from '@fortawesome/free-solid-svg-icons';
import { RegisterService } from '../../../register/register.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../service/patient.service';
import { User } from '../patient.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SidebarComponent,
    NgbDatepickerModule,
    NgbAlertModule,
    JsonPipe,
    FontAwesomeModule,
  ],
  templateUrl: './update.component.html',
  styleUrl: './update.component.scss',
})
export class UpdateComponent implements OnInit {
  faCalender = faCalendar;
  editForm!: FormGroup;
  isSaving = false;
  sidebarExpanded = true;
  model!: NgbDateStruct;
  modelR!: NgbDateStruct;
  isSuccessful = false;
  isSignedUpFailed = false;
  errorMessage = '';
  patient!: User;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private registerService: RegisterService,
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private patientService: PatientService,
    private snackBar: MatSnackBar
  ) {}
  ngOnInit(): void {
    this.editForm = this.formBuilder.group({
      id: [''],
      username: [''],
      firstName: [''],
      email: [''],
      password: [''],
      role: [''],
      designation: [''],
      lastName: [''],
      gender: [''],
      nic: [''],
      phoneNum: [''],
      address: [''],
      city: [''],
      age: [''],
      dob: [''],
      maritalStatus: [''],
      registeredDate: [''],
      weight: [''],
      height: [''],
    });

    const id = this.activatedRouter.snapshot.params['id'];
    console.log('id', id);

    if (id === 'create') {
      // Handle the case where a new patient needs to be registered
      this.handleNewPatientRegistration();
    } else {
      // Handle the case where an existing patient needs to be updated
      this.handlePatientUpdate(id);
    }
  }

  handleNewPatientRegistration(): void {
    this.editForm.patchValue({
      role: 'user', // Assuming patient role
      registeredDate: new Date(), // Default registered date to today
    });
  }

  handlePatientUpdate(id: string): void {
    this.patientService.getPatient(id).subscribe(
      (res) => {
        this.patient = res;
        console.log('patient', this.patient);
        // Patch values to the form
        this.editForm.patchValue({
          id: this.patient.id,
          username: this.patient.username,
          firstName: this.patient.firstName,
          email: this.patient.email,
          designation: this.patient.designation,
          lastName: this.patient.lastName,
          gender: this.patient.gender,
          nic: this.patient.nic,
          phoneNum: this.patient.phoneNum,
          address: this.patient.address,
          city: this.patient.city,
          age: this.patient.age,
          dob: this.patient.dob,
          maritalStatus: this.patient.maritalStatus,
          registeredDate: this.patient.registeredDate,
          weight: this.patient.weight,
          height: this.patient.height,
        });
      },
      (error) => {
        console.error('Error fetching patient data:', error);
      }
    );
  }

  save() {
    // const data = this.editForm.getRawValue();
    // console.log('patient form', data);
    if (this.patient && this.patient.id) {
      const data = this.editForm.getRawValue();
      this.patientService.updateUser(this.patient.id, data).subscribe({
        next: (data) => {
          console.log(data);
          this.isSuccessful = true;
          this.isSignedUpFailed = false;
          this.openSnackBar('updated Successfully', 'OK', 2500);
          if (this.isSuccessful) {
            this.router.navigate(['/admin/patient']);
          }
        },
        error: (err) => {
          this.openSnackBar(err.error, 'OK', 2500);
          console.log(err);
          this.errorMessage = err.error.message;
          this.isSignedUpFailed = false;
        },
      });
    } else {
      console.log('yp');
      const username = this.editForm.get('username')?.value;
      const email = this.editForm.get('email')?.value;
      const password = this.editForm.get('password')?.value;
      const designation = this.editForm.get('designation')?.value;
      const firstName = this.editForm.get('firstName')?.value;
      const lastName = this.editForm.get('lastName')?.value;
      const gender = this.editForm.get('gender')?.value;
      const nic = this.editForm.get('nic')?.value;
      const phoneNum = this.editForm.get('phoneNum')?.value;
      const address = this.editForm.get('address')?.value;
      const city = this.editForm.get('city')?.value;
      const age = this.editForm.get('age')?.value;
      const dob = this.editForm.get('dob')?.value;
      const maritalStatus = this.editForm.get('maritalStatus')?.value;
      const registeredDate = this.editForm.get('registeredDate')?.value;
      const weight = this.editForm.get('weight')?.value;
      const height = this.editForm.get('height')?.value;
      this.registerService
        .register(
          username,
          email,
          password,
          firstName,
          designation,
          lastName,
          gender,
          nic,
          phoneNum,
          address,
          city,
          age,
          dob,
          maritalStatus,
          registeredDate,
          weight,
          height
        )
        .subscribe({
          next: (data) => {
            console.log(data);
            this.isSuccessful = true;
            this.isSignedUpFailed = false;

            if (this.isSuccessful) {
              // alert('Registration Successful!');
              this.openSnackBar('Registration Successful', 'OK', 2500);
              this.router.navigate(['/admin/patient']);
            }
          },
          error: (err) => {
            this.openSnackBar(err.error.message, 'OK', 2500);
            console.log(this.errorMessage);
            this.errorMessage = err.error.message;
            this.isSignedUpFailed = false;
          },
        });
    }
  }

  previousState() {
    window.history.back();
  }
  openSnackBar(message: string, action: string, duration: number) {
    this.snackBar.open(message, action, {
      duration: duration,
    });
  }
}
