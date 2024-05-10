import { Component, OnInit } from '@angular/core';
import { AdminLayoutRoutes } from 'app/layouts/admin-layout/admin-layout.routing';


export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
  description: string;
}

export const ROUTES: RouteInfo[] = [
  ...AdminLayoutRoutes.map(m => ({ path: m.path, title: m.title as string, icon: m.data.icon, class: m.data.class, description: m.data.description }))
];

@Component({
  moduleId: module.id,
  selector: 'sidebar-cmp',
  templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
  public menuItems: any[];
  ngOnInit() {
    this.menuItems = ROUTES.map(m => m);
  }
}
