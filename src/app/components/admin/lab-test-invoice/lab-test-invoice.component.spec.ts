import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabTestInvoiceComponent } from './lab-test-invoice.component';

describe('LabTestInvoiceComponent', () => {
  let component: LabTestInvoiceComponent;
  let fixture: ComponentFixture<LabTestInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabTestInvoiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LabTestInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
