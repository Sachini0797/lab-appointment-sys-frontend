import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  UntypedFormGroup,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlkalinePhosphate } from '../alkaline-phosphate.model';
import { AlkalinePhosphateService } from '../alkaline-phosphate.service';
import { AppointmentService } from '../../../appointment/service/appointment.service';
import { Appointment } from '../../../appointment/appointment.model';

@Component({
  selector: 'app-form-alkaline-phosphate',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './form-alkaline-phosphate.component.html',
  styleUrl: './form-alkaline-phosphate.component.scss',
})
export class FormAlkalinePhosphateComponent implements OnInit {
  editForm!: UntypedFormGroup;
  isSaving = false;
  _apointmentId!: string | null;
  alkalinePhosphate!: AlkalinePhosphate;
  appointment!: Appointment;

  constructor(
    private formBuilder: FormBuilder,
    private _activatedRoute: ActivatedRoute,
    private changeDetector: ChangeDetectorRef,
    private alkalinePhosphateService: AlkalinePhosphateService,
    private appointmentService: AppointmentService,
  ) {}
  ngOnInit(): void {

    const today = new Date();
    const formattedDate = `${today.getFullYear()}-${String(
      today.getMonth() + 1
    ).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}T${String(
      today.getHours()
    ).padStart(2, '0')}:${String(today.getMinutes()).padStart(2, '0')}`;


    this._apointmentId = this._activatedRoute.snapshot.paramMap.get("appointmentId");

    this.editForm = this.formBuilder.group({
      id: [],
      uid: [''],
      appointmentId: [''],
      testNo: [],
      completed: [true],
      createdDate: [formattedDate],
      sampleCollectedDate: [formattedDate],
      sampleReceivedDate: [formattedDate],
      reportAuthorizedDate: [formattedDate],
      alkalinePhosphataseValue: [],
      refNo: [''],
      refBy: [''],
      remarks: [''],
    });

    this.appointmentService.getAppointmentByID(this._apointmentId).subscribe((res: Appointment) => {
      this.appointment = res;

      this.editForm.get("uid")?.patchValue(this.appointment.user.id);
      this.editForm.get("appointmentId")?.patchValue(this.appointment.id);
      this.editForm.get("testNo")?.patchValue(Number(1));
      this.editForm.get("refBy")?.patchValue(this.appointment.doctor.designation + ". " +this.appointment.doctor.name);
 
    })
  }

  save() {
    console.log(this.editForm.value);
    const alkalinePhosphateData: AlkalinePhosphate = this.editForm.value;

    console.log(this.editForm.get('AlkalinePhosphate')?.value);

    this.alkalinePhosphateService
      .createAlkalinePhospate(alkalinePhosphateData)
      .subscribe(
        (response) => {
          console.log('Appointment created successfully:', response);
          this.alkalinePhosphateService.setLabTestInvoiceData(response);

          this.previousState();

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
}
