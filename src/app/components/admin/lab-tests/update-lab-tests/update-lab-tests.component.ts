import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../../../sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import {
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  UntypedFormBuilder,
} from '@angular/forms';
import { LabTestsService } from '../service/lab-tests.service';

@Component({
  selector: 'app-update-lab-tests',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, SidebarComponent],
  templateUrl: './update-lab-tests.component.html',
  styleUrl: './update-lab-tests.component.scss',
})
export class UpdateLabTestsComponent implements OnInit {
  sidebarExpanded = true;
  isSaving = false;
  editForm!: FormGroup;
  errorMessage = '';


  constructor(private formBuilder: UntypedFormBuilder, private labTestService: LabTestsService) {}
  ngOnInit(): void {
    this.editForm = this.formBuilder.group({
      id: [''],
      testName: [''],
      testShortName: [''],
      testNo: [''],
      finalAmount: [''],
      amount: [''],
      remarks: [''],
      percentage: [''],
      discount: [''],
    });
  }

  save() {
    const testName: string = this.editForm.get('testName')?.value;
    const testShortName: string = this.editForm.get('testShortName')?.value;
    const testNo: number = this.editForm.get('testNo')?.value;
    const finalAmount: number = this.editForm.get('finalAmount')?.value;
    const amount: number = this.editForm.get('amount')?.value;
    const remarks: string = this.editForm.get('remarks')?.value;
    const percentage: number = this.editForm.get('percentage')?.value;
    const discount: number = this.editForm.get('discount')?.value;
console.log("dd");
    this.labTestService.createLabTest(testName,
      testShortName,
      testNo,
      finalAmount,
      amount,
      remarks,
      percentage,
      discount).subscribe(
        {
          next: (data) => {
            console.log(data);
            
          },
          error: (err) => {
            this.errorMessage = err.error.message;
            console.log(this.errorMessage);
           },
        }
      );
  }

  previousState() {
    window.history.back();
  }
}
