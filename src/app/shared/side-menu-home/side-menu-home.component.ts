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
      texto: 'Medias',
      ruta: '/home/home-medias'
    },
    {
      texto: 'Proporción',
      ruta: '/home/home-proporcion'
    },
    {
      texto: 'Varianza',
      ruta: '/home/home-varianza'
    },
  ];
}
