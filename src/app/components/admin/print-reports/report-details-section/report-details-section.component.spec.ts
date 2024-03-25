import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportDetailsSectionComponent } from './report-details-section.component';

describe('ReportDetailsSectionComponent', () => {
  let component: ReportDetailsSectionComponent;
  let fixture: ComponentFixture<ReportDetailsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportDetailsSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReportDetailsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
