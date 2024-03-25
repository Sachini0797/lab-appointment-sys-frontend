import { Component } from '@angular/core';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-reports',
  standalone: true,
  imports: [SidebarComponent, CommonModule],
  templateUrl: './my-reports.component.html',
  styleUrl: './my-reports.component.scss'
})
export class MyReportsComponent {
  sidebarExpanded = true;

}
