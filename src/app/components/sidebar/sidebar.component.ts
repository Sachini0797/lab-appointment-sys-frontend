import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {

  
  @Input() isExpanded: boolean = false;
  @Output() toggleSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();

  isConfigurationExpanded: boolean = false;

  handleSidebarToggle = () => this.toggleSidebar.emit(!this.isExpanded);
  toggleConfiguration() {
    this.isConfigurationExpanded = !this.isConfigurationExpanded;

    console.log(this.isConfigurationExpanded);
  }
}
