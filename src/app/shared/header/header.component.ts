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
      texto: 'Home',
      ruta: '/home'
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
      texto: 'Calculadora',
      ruta: '/calculadora'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
