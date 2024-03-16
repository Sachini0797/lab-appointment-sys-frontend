import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormGroup,
} from '@angular/forms';
import { SidebarComponent } from '../../../sidebar/sidebar.component';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, SidebarComponent],
  templateUrl: './update.component.html',
  styleUrl: './update.component.scss',
})
export class UpdateComponent implements OnInit {
  editForm = new FormGroup('');
  isSaving = false;
  sidebarExpanded = true;

  constructor() {}
  ngOnInit(): void {}

  save() {}

  previousState() {
    window.history.back();
  }
}
