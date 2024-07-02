import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Appointment } from '../../../appointment/appointment.model';
import { AppointmentService } from '../../../appointment/service/appointment.service';
import { BloodUreaService } from '../blood-urea.service';

@Component({
  selector: 'app-form-blood-urea',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './form-blood-urea.component.html',
  styleUrl: './form-blood-urea.component.scss'
})
export class FormBloodUreaComponent implements OnInit{
  editForm!: UntypedFormGroup;
  isSaving = false;
  _apointmentId!: string | null;
  appointment!: Appointment;

  constructor (
    private formBuilder: FormBuilder,
    private _activatedRoute: ActivatedRoute,
    private changeDetector: ChangeDetectorRef,
    private bloodUreaService: BloodUreaService,
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
      completed: [true],
      createdDate: [formattedDate],
      sampleCollectedDate: [formattedDate],
      sampleReceivedDate: [formattedDate],
      reportAuthorizedDate: [formattedDate],
      bloodUreaValue: [],
      refNo: [''],
      refBy: [''],
      remarks: [''],
    });

    this.appointmentService.getAppointmentByID(this._apointmentId).subscribe((res: Appointment) => {
      this.appointment = res;

      this.editForm.get("uid")?.patchValue(this.appointment.user.id);
      this.editForm.get("appointmentId")?.patchValue(this.appointment.id);
      this.editForm.get("refBy")?.patchValue(this.appointment.doctor.designation + ". " +this.appointment.doctor.name);
 
    })

  }

  save () {
    console.log(this.editForm.value);
    const bloodUreaData: BloodUreaService = this.editForm.value;

    // console.log(this.editForm.get('')?.value);

    this.bloodUreaService
      .createBloodUrea(bloodUreaData)
      .subscribe(
        (response) => {
          console.log('Appointment created successfully:', response);
          this.bloodUreaService.setLabTestInvoiceData(response);

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
