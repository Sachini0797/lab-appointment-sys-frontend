import { Component } from '@angular/core';
import { BloodUrea } from '../../../admin/print-reports/blood-urea/blood-urea.model';
import { BloodUreaService } from '../../../admin/print-reports/blood-urea/blood-urea.service';
import { StorageService } from '../../../../core/auth/storage.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../../sidebar/sidebar.component';

@Component({
  selector: 'app-blood-urea-list',
  standalone: true,
  imports: [SidebarComponent, CommonModule],
  templateUrl: './blood-urea-list.component.html',
  styleUrl: './blood-urea-list.component.scss'
})
export class BloodUreaListComponent {
  sidebarExpanded = true;
  uid!: string | null;
  bloodUrea!: BloodUrea;

  constructor(
    private bloodUreaService: BloodUreaService,
    private storageService: StorageService,
    private route: Router
  ) {}
  ngOnInit(): void {
    console.log(this.storageService.getUser().id);
    this.uid = this.storageService.getUser().id;
    this.bloodUreaService
      .getBloodUreaByID(this.uid)
      .subscribe((res: BloodUrea) => {
        console.log('f', res);
        this.bloodUrea = res;
      });
  }

  getReport(appointmentID: any) {
    console.log("appointmnet id", appointmentID);
    this.bloodUreaService
      .findByAppointmentId(appointmentID)
      .subscribe((f) => {
        console.log("wat", f.id);
        this.route.navigate([`/admin/print/blood-urea`, f.id]);
      });

  
  }

  previousState() {
    window.history.back();
  }
}
