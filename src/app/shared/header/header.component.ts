import { Component, OnInit } from '@angular/core';

interface MenuItem {
  texto: string;
  ruta: string;
  icon: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  headerMenu: MenuItem[] = [
    {
      texto: 'Home',
      ruta: '/home',
      icon: 'bi bi-house'
    },
    {
      texto: 'Inferencia estadística',
      ruta: '/inferencia',
      icon: 'bi bi-house'
    },
    {
      texto: 'Formulario',
      ruta: '/formulario',
      icon: 'bi bi-house'
    },
    {
      texto: 'Tablas',
      ruta: '/tablas',
      icon: 'bi bi-house'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
