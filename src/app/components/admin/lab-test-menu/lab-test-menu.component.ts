import { Component } from '@angular/core';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTag } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-lab-test-menu',
  standalone: true,
  imports: [CommonModule, RouterModule, SidebarComponent, FontAwesomeModule],
  templateUrl: './lab-test-menu.component.html',
  styleUrl: './lab-test-menu.component.scss',
})
export class LabTestMenuComponent {
  sidebarExpanded = true;

  fatag = faTag;

}
