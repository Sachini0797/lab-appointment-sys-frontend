import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpErrorResponse } from '@angular/common/http';
import { TechnicianService } from '../service/technician.service';

@Component({
  selector: 'app-delete-patient',
  standalone: true,
  imports: [],
  templateUrl: './delete.component.html',
})
export class DeleteComponent implements OnInit{
  @Input() id!: string;
  constructor(
    protected activeModal: NgbModal,
    private technicianService: TechnicianService
  ) {}
  ngOnInit(): void {
    console.log(this.id);
  }

  cancel(): void {
    this.activeModal.dismissAll();
    
  }

  confirmDelete(): void {
    console.log('idd', this.id);
    // this.patientService.deleteEmployee(this.id).subscribe();
    this.technicianService.deleteTechnician(this.id ).subscribe(
      (response: void) => {
        console.log(response);
        // this.getEmployees();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        console.log("not working");
      }
    );
  }
}
