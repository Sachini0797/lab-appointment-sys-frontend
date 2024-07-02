import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../../../sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { StorageService } from '../../../../core/auth/storage.service';
import { AlkalinePhosphateService } from '../../../admin/print-reports/alkaline-phosphate/alkaline-phosphate.service';
import { AlkalinePhosphate } from '../../../admin/print-reports/alkaline-phosphate/alkaline-phosphate.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alkaline-phosphatase-list',
  standalone: true,
  imports: [SidebarComponent, CommonModule],
  templateUrl: './alkaline-phosphatase-list.component.html',
  styleUrl: './alkaline-phosphatase-list.component.scss',
})
export class AlkalinePhosphataseListComponent implements OnInit {
  sidebarExpanded = true;
  uid!: string | null;
  alkaline!: AlkalinePhosphate;

  constructor(
    private alkalinePhosphateService: AlkalinePhosphateService,
    private storageService: StorageService,
    private route: Router
  ) {}
  ngOnInit(): void {
    console.log(this.storageService.getUser().id);
    this.uid = this.storageService.getUser().id;
    this.alkalinePhosphateService
      .getAlkalinePhosphateByUserID(this.uid)
      .subscribe((res: AlkalinePhosphate) => {
        console.log('f', res);
        this.alkaline = res;
      });
  }

  getReport(appointmentID: any) {
    console.log("appointmnet id", appointmentID);
    this.alkalinePhosphateService
      .findByAppointmentIdAndLabTestId(appointmentID)
      .subscribe((f) => {
        console.log("wat", f.id);
        this.route.navigate([`/admin/print/alkaline`, f.id]);
      });

    // console.log(this.storageService.getUser().id);
    // this.uid = this.storageService.getUser().id;
    // this.alkalinePhosphateService
    //   .getAlkalinePhosphateByUserID(this.uid)
    //   .subscribe((res: any) => {
    //     console.log('f', this.uid);
    //     this.alkaline = res;
    //     this.route.navigate([`/admin/print/alkaline`, res.id]);

    //   });
  }

  previousState() {
    window.history.back();
  }
}
