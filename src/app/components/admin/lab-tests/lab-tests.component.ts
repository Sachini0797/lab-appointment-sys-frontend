import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { FormGroup } from '@angular/forms';
import { DeleteLabTestsComponent } from './delete-lab-tests/delete-lab-tests.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-lab-tests',
  standalone: true,
  imports: [CommonModule, RouterModule, SidebarComponent],
  templateUrl: './lab-tests.component.html',
  styleUrl: './lab-tests.component.scss',
})
export class LabTestsComponent {
  sidebarExpanded = true;
 constructor(protected modalService: NgbModal){}
  delete() {
    // const modalRef = this.modalService.open(ModalComponent);
    const modalRef = this.modalService.open(DeleteLabTestsComponent);
    modalRef.componentInstance.title = 'About';

  }
}
