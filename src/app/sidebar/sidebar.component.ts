import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
  description: string;
}

export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard', icon: 'home', class: '', description: 'Página inicial'},
  { path: '/gera-senha', title: 'Gera Senha', icon: 'lock', class: '', description: 'Ferramenta para gerar senhas seguras'},
  { path: '/base64', title: 'Base64', icon: 'description', class: '', description: 'Ferramenta para codificar e decodificar base64'},
  /*{ path: '/icons', title: 'Icons', icon: 'nc-diamond', class: '' },
  { path: '/maps', title: 'Maps', icon: 'nc-pin-3', class: '' },
  { path: '/notifications', title: 'Notifications', icon: 'nc-bell-55', class: '' },
  { path: '/user', title: 'User Profile', icon: 'nc-single-02', class: '' },
  { path: '/table', title: 'Table List', icon: 'nc-tile-56', class: '' },
  { path: '/typography', title: 'Typography', icon: 'nc-caps-small', class: '' },
  { path: '/upgrade', title: 'Upgrade to PRO', icon: 'nc-spaceship', class: 'active-pro' },*/
];

@Component({
  moduleId: module.id,
  selector: 'sidebar-cmp',
  templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
  public menuItems: any[];
  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
}
