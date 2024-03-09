import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabTestMenuComponent } from './lab-test-menu.component';

describe('LabTestMenuComponent', () => {
  let component: LabTestMenuComponent;
  let fixture: ComponentFixture<LabTestMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabTestMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LabTestMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
