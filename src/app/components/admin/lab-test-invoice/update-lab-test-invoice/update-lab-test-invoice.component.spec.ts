import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLabTestInvoiceComponent } from './update-lab-test-invoice.component';

describe('UpdateLabTestInvoiceComponent', () => {
  let component: UpdateLabTestInvoiceComponent;
  let fixture: ComponentFixture<UpdateLabTestInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateLabTestInvoiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateLabTestInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
