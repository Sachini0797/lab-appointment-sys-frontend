import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from '../../../sidebar/sidebar.component';
import { TechnicianService } from '../service/technician.service';
import { LabTechnician } from '../technician.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-technician',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, SidebarComponent],
   templateUrl: './update-technician.component.html',
  styleUrl: './update-technician.component.scss'
})
export class UpdateTechnicianComponent implements OnInit {
  editForm!: FormGroup;
  isSaving: boolean = false;

  
   tech!: LabTechnician;

  isSuccessful = false;
  isSignedUpFailed = false;
  errorMessage = '';

  constructor(private formBuilder: FormBuilder, private technicianService: TechnicianService, private router: Router) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.editForm = this.formBuilder.group({
      id: [''],
      name: [''],
      contactNumber: [''],
      email: [''],
      specialization: [''],
      workingStartTime: [''],
      workingEndTime: ['']
    });
  }

  save(): void {
    if (this.editForm.invalid) {
      return;
    }
    const data = this.editForm.getRawValue();


    this.technicianService.createTechnician(data).subscribe({
      next: (data) => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignedUpFailed = false;
        if (this.isSuccessful) {
          alert('Registration Successful!');
          this.router.navigate(['/admin/technician']);
        }
      },
      error: (err) => {
        this.errorMessage = err.error.message;
        this.isSignedUpFailed = false;
      },
    });
    // Perform save operation here
    console.log('Form submitted successfully!');
  }

  previousState(): void {
    // Handle previous state navigation
    window.history.back();
    console.log('Navigate to previous state');
  }
}