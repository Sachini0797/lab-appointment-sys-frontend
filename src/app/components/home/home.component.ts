import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DatePipe, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  todayRealtimeDate: number = Date.now();

  constructor(private router: Router,) {}

  ngOnInit(): void {
    setInterval(() => {
      this.todayRealtimeDate = Date.now();
    }, 1);
  }
  
}
