import { Component, OnInit } from '@angular/core';

interface MenuItem {
  texto: string;
  ruta: string;
}

@Component({
  selector: 'app-side-menu-inferencia',
  templateUrl: './side-menu-inferencia.component.html',
  styleUrls: ['./side-menu-inferencia.component.css']
})
export class SideMenuInferenciaComponent implements OnInit {

  templateMenu: MenuItem[] = [
    {
      texto: 'Dist. Bernoulli',
      ruta: '/inferencia/vad-bernoulli'
    },
    {
      texto: 'Dist. Binomial',
      ruta: '/inferencia/vad-binomial'
    },
    {
      texto: 'Título 3',
      ruta: '#'
    },
    {
      texto: 'Distribuciones',
      ruta: '/inferencia/distribuciones'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
