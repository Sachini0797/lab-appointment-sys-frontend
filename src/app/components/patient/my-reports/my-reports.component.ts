import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { AlkalinePhosphateService } from '../../admin/print-reports/alkaline-phosphate/alkaline-phosphate.service';
import { StorageService } from '../../../core/auth/storage.service';
import { AlkalinePhosphate } from '../../admin/print-reports/alkaline-phosphate/alkaline-phosphate.model';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTag } from '@fortawesome/free-solid-svg-icons';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-my-reports',
  standalone: true,
  imports: [SidebarComponent, CommonModule, FontAwesomeModule, RouterModule],
  templateUrl: './my-reports.component.html',
  styleUrl: './my-reports.component.scss',
})
export class MyReportsComponent implements OnInit {
  sidebarExpanded = true;
  uid!: string | null;
  alkaline!: AlkalinePhosphate;
  fatag = faTag;

  constructor(
    private alkalinePhosphateService: AlkalinePhosphateService,
    private storageService: StorageService
  ) {}
  ngOnInit(): void {
    console.log(this.storageService.getUser().id);
    this.uid = this.storageService.getUser().id;
    // this.alkalinePhosphateService
    //   .getAlkalinePhosphateByUserID(this.uid)
    //   .subscribe((res: AlkalinePhosphate) => {
    //     console.log('f', res);
    //     this.alkaline = res;
    //   });
  }
}
