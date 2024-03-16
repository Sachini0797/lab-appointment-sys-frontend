import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StorageService } from '../../core/auth/storage.service';
import { AccountService } from '../../core/auth/account.service';

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

  @Input() showEntities: boolean = false;
  @Input() showDoctor: boolean = false;

  constructor(
    private storageService: StorageService,
    private accountService: AccountService,
    private router: Router
  ) {}

  handleSidebarToggle = () => this.toggleSidebar.emit(!this.isExpanded);

  toggleEntities() {
    this.showEntities = !this.showEntities;
  }

  toggleDoctors() {
    this.showDoctor = !this.showDoctor;
  }
  logout(): void {
    this.accountService.logout().subscribe({
      next: (res) => {
        console.log(res);
        this.storageService.clean();
        // window.location.reload();
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
