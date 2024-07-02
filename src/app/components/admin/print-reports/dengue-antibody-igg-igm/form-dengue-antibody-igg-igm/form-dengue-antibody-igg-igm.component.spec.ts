import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDengueAntibodyIggIgmComponent } from './form-dengue-antibody-igg-igm.component';

describe('FormDengueAntibodyIggIgmComponent', () => {
  let component: FormDengueAntibodyIggIgmComponent;
  let fixture: ComponentFixture<FormDengueAntibodyIggIgmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormDengueAntibodyIggIgmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormDengueAntibodyIggIgmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
