import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBloodUreaComponent } from './form-blood-urea.component';

describe('FormBloodUreaComponent', () => {
  let component: FormBloodUreaComponent;
  let fixture: ComponentFixture<FormBloodUreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormBloodUreaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormBloodUreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
