import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
  FormArray,
  UntypedFormGroup,
  UntypedFormArray,
} from '@angular/forms';
import { SidebarComponent } from '../../../sidebar/sidebar.component';
import { AppointmentService } from '../../appointment/service/appointment.service';
import { Appointment, LabTest } from '../../appointment/appointment.model';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';
import { LabTestInvoice } from '../lab-test-invoice.model';
import { LabTestInvoiceService } from '../service/lab-test-invoice.service';

@Component({
  selector: 'app-update-lab-test-invoice',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SidebarComponent,
    FontAwesomeModule,
  ],
  templateUrl: './update-lab-test-invoice.component.html',
  styleUrl: './update-lab-test-invoice.component.scss',
})
export class UpdateLabTestInvoiceComponent {
  sidebarExpanded = true;
  editForm!: UntypedFormGroup;
  isSaving = false;
  appointment!: Appointment;
  faDelete = faTrash;
  _apointmentId!: string | null;
  billAmount: number = 0;
 
  constructor(
    private appointmentService: AppointmentService,
    private formBuilder: FormBuilder,
    private _activatedRoute: ActivatedRoute,
    private changeDetector: ChangeDetectorRef, // Inject ChangeDetectorRef,
    private labTestInvoiceService: LabTestInvoiceService,
    private route: Router


  ) {}
  ngOnInit(): void {
    this._apointmentId =
      this._activatedRoute.snapshot.paramMap.get('appointmentId');
    const today = new Date();
    const formattedDate = `${today.getFullYear()}-${String(
      today.getMonth() + 1
    ).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}T${String(
      today.getHours()
    ).padStart(2, '0')}:${String(today.getMinutes()).padStart(2, '0')}`;
    this.editForm = this.formBuilder.group({
      id: [''],
      appointment: this.formBuilder.group({
        id: [],
        name: [],
        appointmentDate: [],
        startTime: [],
        endTime: [],
        user: this.formBuilder.group({
          id: [],
          email: [],
          firstName: [],
          lastName: [],
          phoneNum: [],
        }),
        doctor: this.formBuilder.group({
          id: [''],
          designation: [''],
          name: [''],
          position: [''],
        }),
        labTechnician: this.formBuilder.group({
          id: [],
          name: [],
        }),
        labTests: this.formBuilder.array([]),
      }),
      billAmount: [0],
      discount: [0],
      totalAmount: [''],
      paidAmount: [''],
      dueAmount: [''],
      remarks: [''],
      generatedAt: [formattedDate],
    });


    this.appointmentService
      .getAppointmentByID(this._apointmentId)
      .subscribe((res: Appointment) => {
        console.log('res for created appointment id', res);

        this.editForm.get('appointment')?.patchValue(res);
        // this.editForm.get('appointment')?.get('doctor')?.patchValue(res.doctor)

        // Use the appointment data here
        this.appointment = res;
        // console.log('Appointment data in invoice component:', res);
        let labTestFormGroup: any = [];

        if (res.labTests.length > 0) {
          res.labTests.forEach((e) => {
            labTestFormGroup.push(
              this.formBuilder.group({
                id: [e.id],
                testName: [e.testName],
                testShortName: [e.testShortName],
                testNo: [e.testNo],
                amount: [e.amount],
              })
            );
          });
        } else {
         labTestFormGroup.push(
            this.formBuilder.group({
              id: [],
              testNmae: [],
            })
          );
        }

        labTestFormGroup.forEach((labTestFormGroup: any) => {
          (
            this.editForm
              .get('appointment')
              ?.get('labTests') as UntypedFormArray
          ).push(labTestFormGroup);
        });

        console.log(this.editForm.value, 'value after upadting my edit form');
        this.calculateBillAmountAndTotals(); // Call this function after fetching data

      });
console.log("check", this.editForm.get("billAmount")?.value)
     


  }

  get labTestList() {
    return this.editForm
      .get('appointment')
      ?.get('labTests') as UntypedFormArray;
  }
  save() {
    console.log(this.editForm.value);
    const labTestInvoiceData: LabTestInvoice = this.editForm.value;

    console.log(this.editForm.get('billAmount')?.value);
    

    this.labTestInvoiceService.createLabTestInvoice(labTestInvoiceData).subscribe(
      (response) => {
        console.log('Appointment created successfully:', response);
        this.labTestInvoiceService.setLabTestInvoiceData(response);
        
        if (confirm('Are you sure you want to open the lab test invoice in a new window?')) {
          const url = this.route.createUrlTree(['/admin/labtestinvoiceprint', response.id]).toString();
          window.open(url, '_blank');
        }
        
        // this.route.navigate([`/admin/labtestinvoiceprint`, response.id]);
      },
      (error) => {
        console.error('Error creating appointment:', error);
        // Handle error response
      }
    );
  }

  previousState() {
    window.history.back();
  }

  calculateBillAmountAndTotals() {
    const labTests = this.labTestList.value as LabTest[]; // Access labTests from FormArray
    let billAmount = 0;
    
    labTests.forEach(labTest => {
      if (labTest.amount) {
        billAmount += labTest.amount;
      } 
    });
    this.billAmount = billAmount;
    console.log("bill", this.billAmount)


    // Discount logic (if applicable)
    let discount = 0; // Assuming discount is initially 0
    // Replace this placeholder with your discount calculation logic

 
    // Update bill amount form control
    this.editForm.get('billAmount')!.patchValue(billAmount);

    this.editForm.get('discount')?.valueChanges.subscribe(f => {
      console.log("mm", f);
      if (f === 100) {
        this.editForm.get(['totalAmount'])?.patchValue(Number(0));
        this.editForm.get(['paidAmount'])?.patchValue(Number(0));
      } else {
        const billAmount = Number(this.editForm.get(['billAmount'])?.value);
        const dicounted = (billAmount / 100) * f;
        const newTotal = billAmount - dicounted;

        this.editForm.get(['totalAmount'])?.patchValue(Number(newTotal));
        this.editForm.get(['paidAmount'])?.patchValue(Number(newTotal));
      }
    });
    this.editForm.get(['paidAmount'])?.valueChanges.subscribe(e => {
      const totalAmount = Number(this.editForm.get(['totalAmount'])?.value);
      const paidAmount = Number(this.editForm.get(['paidAmount'])?.value);
      const duePayment = totalAmount - paidAmount;
      this.editForm.get(['dueAmount'])?.patchValue(duePayment);
    });
  }
}
