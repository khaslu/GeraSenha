import { Component, OnInit } from '@angular/core';
import { ROUTES } from 'app/sidebar/sidebar.component';


@Component({
  selector: 'dashboard-cmp',
  moduleId: module.id,
  templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit {
  menuItems = ROUTES.filter(m => m.title !== 'Dashboard');
  ngOnInit(): void {
  }
}
