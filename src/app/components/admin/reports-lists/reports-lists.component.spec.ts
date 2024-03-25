import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsListsComponent } from './reports-lists.component';

describe('ReportsListsComponent', () => {
  let component: ReportsListsComponent;
  let fixture: ComponentFixture<ReportsListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportsListsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReportsListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
