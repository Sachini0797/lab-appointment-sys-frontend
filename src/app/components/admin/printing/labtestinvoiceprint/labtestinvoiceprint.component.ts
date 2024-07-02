import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LabTestInvoiceService } from '../../lab-test-invoice/service/lab-test-invoice.service';
import { LabTestInvoice } from '../../lab-test-invoice/lab-test-invoice.model';

@Component({
  selector: 'app-labtestinvoiceprint',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './labtestinvoiceprint.component.html',
  styleUrl: './labtestinvoiceprint.component.scss',
})
export class LabtestinvoiceprintComponent implements OnInit{

  _labTestInvoiceId!: string | null;
  labTestInoiceData!: LabTestInvoice;


  constructor(
    private _activatedRoute: ActivatedRoute,
    private labTestInoice: LabTestInvoiceService

  ){}
  ngOnInit(): void {
    this._labTestInvoiceId = this._activatedRoute.snapshot.paramMap.get('labTestInvoiceId');
    console.log("labTestInvoiceId", this._labTestInvoiceId);

    this.labTestInoice.getLabTestInvoiceByID(this._labTestInvoiceId).subscribe((res: LabTestInvoice) => {
      this.labTestInoiceData = res;
      console.log("labTest by id", this.labTestInoiceData);
    })
  }

}
