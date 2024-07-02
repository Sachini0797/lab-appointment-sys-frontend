import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DengueAntibodyIggIgmComponent } from './dengue-antibody-igg-igm.component';

describe('DengueAntibodyIggIgmComponent', () => {
  let component: DengueAntibodyIggIgmComponent;
  let fixture: ComponentFixture<DengueAntibodyIggIgmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DengueAntibodyIggIgmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DengueAntibodyIggIgmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
