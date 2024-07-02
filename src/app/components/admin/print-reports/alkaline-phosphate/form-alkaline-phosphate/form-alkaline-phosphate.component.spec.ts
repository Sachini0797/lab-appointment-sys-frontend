import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAlkalinePhosphateComponent } from './form-alkaline-phosphate.component';

describe('FormAlkalinePhosphateComponent', () => {
  let component: FormAlkalinePhosphateComponent;
  let fixture: ComponentFixture<FormAlkalinePhosphateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormAlkalinePhosphateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormAlkalinePhosphateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
