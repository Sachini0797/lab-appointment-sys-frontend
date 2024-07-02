import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlkalinePhosphataseListComponent } from './alkaline-phosphatase-list.component';

describe('AlkalinePhosphataseListComponent', () => {
  let component: AlkalinePhosphataseListComponent;
  let fixture: ComponentFixture<AlkalinePhosphataseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlkalinePhosphataseListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlkalinePhosphataseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
