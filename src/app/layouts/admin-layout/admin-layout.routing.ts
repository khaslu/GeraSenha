import { Routes } from '@angular/router';

import { Base64Component } from 'app/pages/base64/base64.component';
import { GeraSenhaComponent } from 'app/pages/gera-senha/gera-senha.component';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { HashComponent } from 'app/pages/hash/hash.component';
import { CryptComponent } from 'app/pages/crypt/crypt.component';

export const AdminLayoutRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent, title: 'Dashboard', data: { icon: 'home', class: '', description: 'Página inicial' } },
  { path: 'gera-senha', component: GeraSenhaComponent, title: 'Gera Senha', data: { icon: 'lock', class: '', description: 'Ferramenta para gerar senhas seguras' } },
  { path: 'base64', component: Base64Component, title: 'Base64', data: { icon: 'description', class: '', description: 'Ferramenta para codificar e decodificar base64' } },
  { path: 'hash', component: HashComponent, title: 'Hash', data: { icon: 'tag', class: '', description: 'Ferramenta para gerar Hashs' } },
  { path: 'crypt', component: CryptComponent, title: 'Crypt', data: { icon: 'shield', class: '', description: 'Ferramenta para gerar Criptografias' } },
  /*{ path: 'user',           component: UserComponent },
  { path: 'table',          component: TableComponent },
  { path: 'typography',     component: TypographyComponent },
  { path: 'icons',          component: IconsComponent },
  { path: 'maps',           component: MapsComponent },
  { path: 'notifications',  component: NotificationsComponent },
  { path: 'upgrade',        component: UpgradeComponent }*/
];
