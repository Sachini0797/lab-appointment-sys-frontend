import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-doctor',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './update-doctor.component.html',
  styleUrl: './update-doctor.component.scss'
})
export class UpdateDoctorComponent implements OnInit{
  editForm!: FormGroup;
  isSaving: boolean = false;

  constructor(private formBuilder: FormBuilder) { }

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
      remark: ['']
    });
  }

  save() {
    if (this.editForm.valid) {
 
    }
  }

  previousState() {
    window.history.back();
  }
}
