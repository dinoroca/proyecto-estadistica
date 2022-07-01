import { Component } from '@angular/core';

interface MenuItem {
  texto: string;
  ruta: string;
}

@Component({
  selector: 'app-side-menu-home',
  templateUrl: './side-menu-home.component.html',
  styleUrls: ['./side-menu-home.component.css']
})
export class SideMenuHomeComponent {

  templateMenu: MenuItem[] = [
    {
      texto: 'Distribución de la media',
      ruta: '/inicio/home-medias'
    },
    {
      texto: 'Distribución de la proporción',
      ruta: '/inicio/home-proporcion'
    },
    {
      texto: 'Distribución de la varianza',
      ruta: '/inicio/home-varianza'
    },
  ];
}
