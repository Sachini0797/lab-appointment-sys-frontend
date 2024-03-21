import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from '../../../sidebar/sidebar.component';

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

  constructor(private formBuilder: FormBuilder) { }

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
    // Perform save operation here
    console.log('Form submitted successfully!');
  }

  previousState(): void {
    // Handle previous state navigation
    window.history.back();
    console.log('Navigate to previous state');
  }
}