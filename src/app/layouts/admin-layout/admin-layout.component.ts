import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

  tema = 'dark';
  cor = 'danger';

  ngOnInit() {
    localStorage.getItem('tema') ? this.tema = localStorage.getItem('tema') : this.tema = 'dark';
    localStorage.getItem('cor') ? this.cor = localStorage.getItem('cor') : this.cor = 'danger';
  }
}
