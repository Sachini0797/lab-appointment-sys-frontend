import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabtestinvoiceprintComponent } from './labtestinvoiceprint.component';

describe('LabtestinvoiceprintComponent', () => {
  let component: LabtestinvoiceprintComponent;
  let fixture: ComponentFixture<LabtestinvoiceprintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabtestinvoiceprintComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LabtestinvoiceprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
