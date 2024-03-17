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
import { Router } from '@angular/router';

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

  constructor(
    private formBuilder: UntypedFormBuilder,
    private registerService: RegisterService,
    private router: Router
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
  }

  save() {
    // const data = this.editForm.getRawValue();
    // console.log('patient form', data);
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
            alert('Registration Successful!');
            this.router.navigate(['/admin/patient']);
          }
        },
        error: (err) => {
          this.errorMessage = err.error.message;
          this.isSignedUpFailed = false;
        },
      });
  }

  previousState() {
    window.history.back();
  }
}
