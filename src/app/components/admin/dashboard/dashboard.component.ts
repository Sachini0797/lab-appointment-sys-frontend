import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule ,RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  hamBurger: HTMLElement | null;

  constructor() {
    this.hamBurger = document.querySelector(".toggle-btn");

    if (this.hamBurger) {
      this.hamBurger.addEventListener("click", () => {
        const sidebar: HTMLElement | null = document.querySelector("#sidebar");
        if (sidebar) {
          sidebar.classList.toggle("expand");
        }
      });
    }
  }
}
