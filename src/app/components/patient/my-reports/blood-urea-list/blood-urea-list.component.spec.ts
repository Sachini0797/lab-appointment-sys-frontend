import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodUreaListComponent } from './blood-urea-list.component';

describe('BloodUreaListComponent', () => {
  let component: BloodUreaListComponent;
  let fixture: ComponentFixture<BloodUreaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BloodUreaListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BloodUreaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
