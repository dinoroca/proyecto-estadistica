import { Component, OnInit } from '@angular/core';

interface MenuItem {
  texto: string;
  ruta: string;
}

@Component({
  selector: 'app-side-menu-formulario',
  templateUrl: './side-menu-formulario.component.html',
  styleUrls: ['./side-menu-formulario.component.css']
})
export class SideMenuFormularioComponent implements OnInit {

  formularioMenu: MenuItem[] = [
    {
      texto: 'D.M. de la media',
      ruta: '/formulario/dm-media'
    },
    {
      texto: 'D.M. de la varianza',
      ruta: '/formulario/dm-varianza'
    },
    {
      texto: 'D.M. de la proporción',
      ruta: '/formulario/dm-proporcion'
    },
    {
      texto: 'D.M. de la diferencia de 2 medias',
      ruta: '/formulario/dm-dif-2-medias'
    },
    {
      texto: 'D.M. de la diferencia de 2 proporciones',
      ruta: '/formulario/dm-dif-2-proporciones'
    },
    {
      texto: 'D.M. de la razón de 2 varianzas muestrales',
      ruta: '/formulario/dm-raz-2-varianzas'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
