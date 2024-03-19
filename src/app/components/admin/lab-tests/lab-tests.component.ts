import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { FormGroup } from '@angular/forms';
import { DeleteLabTestsComponent } from './delete-lab-tests/delete-lab-tests.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LabTestsService } from './service/lab-tests.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-lab-tests',
  standalone: true,
  imports: [CommonModule, RouterModule, SidebarComponent],
  templateUrl: './lab-tests.component.html',
  styleUrl: './lab-tests.component.scss',
})
export class LabTestsComponent implements OnInit {
  sidebarExpanded = true;
  public labTests: any[] = [];

  constructor(
    protected modalService: NgbModal,
    private labTestsService: LabTestsService
  ) {}
  ngOnInit(): void {
    this.labTestsService.getLabTestsa().subscribe(
      (response: any[]) => {
        this.labTests = response;
        console.log('lab tests: ', this.labTests);
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }

  delete() {
    // const modalRef = this.modalService.open(ModalComponent);
    const modalRef = this.modalService.open(DeleteLabTestsComponent);
    modalRef.componentInstance.title = 'About';
  }
}
