import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-lab-tests',
  standalone: true,
  imports: [],
  templateUrl: './delete-lab-tests.component.html',
  styleUrl: './delete-lab-tests.component.scss'
})
export class DeleteLabTestsComponent {
  constructor(protected activeModal: NgbModal) {}

  cancel(): void {
    this.activeModal.dismissAll();
  }

  confirmDelete(): void {
    

  }

}
