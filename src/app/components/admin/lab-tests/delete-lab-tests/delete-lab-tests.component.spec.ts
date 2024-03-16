import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteLabTestsComponent } from './delete-lab-tests.component';

describe('DeleteLabTestsComponent', () => {
  let component: DeleteLabTestsComponent;
  let fixture: ComponentFixture<DeleteLabTestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteLabTestsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteLabTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
