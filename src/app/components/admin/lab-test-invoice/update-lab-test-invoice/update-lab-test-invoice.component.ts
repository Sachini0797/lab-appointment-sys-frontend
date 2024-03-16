import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { SidebarComponent } from '../../../sidebar/sidebar.component';

@Component({
  selector: 'app-update-lab-test-invoice',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, SidebarComponent],
  templateUrl: './update-lab-test-invoice.component.html',
  styleUrl: './update-lab-test-invoice.component.scss'
})
export class UpdateLabTestInvoiceComponent {
  sidebarExpanded = true;
  editForm = new FormGroup('');
  isSaving = false;

  
  constructor() {}
  ngOnInit(): void {}


  reset1(){}
  reset2(){}
  reset3(){}
  reset4(){}
  reset5(){}
  
  save() {}


  previousState() {
    window.history.back();
  }
}
