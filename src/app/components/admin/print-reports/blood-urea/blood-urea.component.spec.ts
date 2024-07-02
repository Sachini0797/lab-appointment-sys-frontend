import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodUreaComponent } from './blood-urea.component';

describe('BloodUreaComponent', () => {
  let component: BloodUreaComponent;
  let fixture: ComponentFixture<BloodUreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BloodUreaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BloodUreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
