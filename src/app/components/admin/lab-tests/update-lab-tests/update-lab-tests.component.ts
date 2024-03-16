import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../../../sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-lab-tests',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, SidebarComponent],
  templateUrl: './update-lab-tests.component.html',
  styleUrl: './update-lab-tests.component.scss',
})
export class UpdateLabTestsComponent implements OnInit{
  sidebarExpanded = true;
  editForm = new FormGroup('');
  isSaving = false;

  
  constructor() {}
  ngOnInit(): void {}
  
  save() {}


  previousState() {
    window.history.back();
  }
}
