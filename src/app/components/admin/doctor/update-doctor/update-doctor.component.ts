import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DoctorService } from '../service/doctor.service';
import { Doctor } from '../doctor.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-update-doctor',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './update-doctor.component.html',
  styleUrl: './update-doctor.component.scss',
})
export class UpdateDoctorComponent implements OnInit {
  editForm!: FormGroup;
  isSaving: boolean = false;
  doctor!: Doctor;

  isSuccessful = false;
  isSignedUpFailed = false;
  errorMessage = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private doctorService: DoctorService,
    private snackBar: MatSnackBar,
  ) {}

  ngOnInit(): void {
    this.editForm = this.formBuilder.group({
      id: [''],
      name: [''],
      designation: [''],
      consultantTitle: [''],
      consultantFees: [''],
      hospitalFees: [''],
      position: [''],
      contactNumber: [''],
      contactNumber1: [''],
      email: [''],
      remark: [''],
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
    this.editForm.patchValue({});
  }

  handlePatientUpdate(id: string): void {
    this.doctorService.getDoctor(id).subscribe(
      (res) => {
        this.doctor = res;
        console.log('patient', this.doctor);
        // Patch values to the form
        this.editForm.patchValue({
          id: this.doctor.id,
          name: this.doctor.name,
          designation: this.doctor.designation,
          consultantTitle: this.doctor.consultantTitle,
          consultantFees: this.doctor.consultantFees,
          hospitalFees: this.doctor.hospitalFees,
          position: this.doctor.position,
          contactNumber: this.doctor.contactNumber,
          contactNumber1: this.doctor.contactNumber1,
          email: this.doctor.email,
          remark: this.doctor.remark,
        });
      },
      (error) => {
        console.error('Error fetching patient data:', error);
      }
    );
  }

  save() {
    if (this.doctor && this.doctor.id) {
      const data = this.editForm.getRawValue();
      this.doctorService.updateDoctor(this.doctor.id, data).subscribe({
        next: (data) => {
          console.log(data);
          this.isSuccessful = true;
          this.isSignedUpFailed = false;
          if (this.isSuccessful) {
            this.openSnackBar('New doctor added Successfully', 'OK', 2500);
            this.router.navigate(['/admin/doctor']);
          }
        },
        error: (err) => {
          this.errorMessage = err.error.message;
          this.openSnackBar('Try again', 'OK', 2500);
          this.isSignedUpFailed = false;
        },
      });
    } else {
      const data = this.editForm.getRawValue();
      this.doctorService.createDoctor(data).subscribe({
        next: (data) => {
          console.log(data);
          this.isSuccessful = true;
          this.isSignedUpFailed = false;
          if (this.isSuccessful) {
            alert('Registration Successful!');
            this.router.navigate(['/admin/doctor']);
          }
        },
        error: (err) => {
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
