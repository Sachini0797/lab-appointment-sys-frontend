import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteLabTestInvoiceComponent } from './delete-lab-test-invoice.component';

describe('DeleteLabTestInvoiceComponent', () => {
  let component: DeleteLabTestInvoiceComponent;
  let fixture: ComponentFixture<DeleteLabTestInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteLabTestInvoiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteLabTestInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
