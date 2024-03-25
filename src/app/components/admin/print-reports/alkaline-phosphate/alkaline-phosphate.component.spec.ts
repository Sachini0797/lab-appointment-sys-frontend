import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlkalinePhosphateComponent } from './alkaline-phosphate.component';

describe('AlkalinePhosphateComponent', () => {
  let component: AlkalinePhosphateComponent;
  let fixture: ComponentFixture<AlkalinePhosphateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlkalinePhosphateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlkalinePhosphateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
