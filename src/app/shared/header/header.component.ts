import { Component, OnInit } from '@angular/core';

interface MenuItem {
  texto: string;
  ruta: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  headerMenu: MenuItem[] = [
    {
      texto: 'Inicio',
      ruta: '/inicio'
    },
    {
      texto: 'Inferencia estadística',
      ruta: '/inferencia'
    },
    {
      texto: 'Formulario',
      ruta: '/formulario'
    },
    {
      texto: 'Tablas',
      ruta: '/tablas'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
