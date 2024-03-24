import { TestBed } from '@angular/core/testing';

import { LabTestInvoiceService } from './lab-test-invoice.service';

describe('LabTestInvoiceService', () => {
  let service: LabTestInvoiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LabTestInvoiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
