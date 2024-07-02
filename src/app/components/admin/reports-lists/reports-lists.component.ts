import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { LabTestInvoice } from '../lab-test-invoice/lab-test-invoice.model';
import { LabTestInvoiceService } from '../lab-test-invoice/service/lab-test-invoice.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AlkalinePhosphateService } from '../print-reports/alkaline-phosphate/alkaline-phosphate.service';
import { AlkalinePhosphate } from '../print-reports/alkaline-phosphate/alkaline-phosphate.model';
import { BloodUreaService } from '../print-reports/blood-urea/blood-urea.service';

@Component({
  selector: 'app-reports-lists',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './reports-lists.component.html',
  styleUrl: './reports-lists.component.scss',
})
export class ReportsListsComponent implements OnInit {
  labTestInvoice!: LabTestInvoice;
  labTestInvoiceID!: string | null;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private labTestInvoiceService: LabTestInvoiceService,
    private route: Router,
    private alkalinePhosphateService: AlkalinePhosphateService,
    private bloodUreaService: BloodUreaService
  ) {}
  ngOnInit(): void {
    this.labTestInvoiceID =
      this._activatedRoute.snapshot.paramMap.get('labTestInvoiceId');
    console.log('lab test invoice id', this.labTestInvoiceID);

    this.labTestInvoiceService
      .getLabTestInvoiceByID(this.labTestInvoiceID)
      .subscribe((res: LabTestInvoice) => {
        this.labTestInvoice = res;
      });
  }

  form(labTestId: any, appointmentId: any) {
    console.log('yo', labTestId);
    if (labTestId === 1) {
      console.log('alkaline');
      this.route.navigate([`/admin/print/form-alkaline`, appointmentId]);
    } else if (labTestId === 2) {
      console.log('blood urea');
      this.route.navigate([`/admin/print/form-blood-urea`, appointmentId]);
    } else if (labTestId === 3) {
      console.log('dengue');
      this.route.navigate([`/admin/print/form-dengue-antibody`, appointmentId]);
    }
  }

  fullPrint(appointmentId: any, labTestId: any) {
    console.log(appointmentId + ' ' + labTestId);
    if (labTestId === 1) {
      console.log('yo');
      this.alkalinePhosphateService
        .findByAppointmentIdAndLabTestId(appointmentId)
        .subscribe((f) => {
          this.route.navigate([`/admin/print/alkaline`, f.id]);
        });
    } else if (labTestId === 2) {
      this.bloodUreaService
        .findByAppointmentId(appointmentId)
        .subscribe((b) => {
          this.route.navigate([`/admin/print/blood-urea`, b.id]);
        });
      console.log('yo yo');
    }
  }
}
