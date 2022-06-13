import { Component } from '@angular/core';

interface MenuItem {
  texto: string;
  ruta: string;
}

@Component({
  selector: 'app-side-menu-inferencia',
  templateUrl: './side-menu-inferencia.component.html',
  styleUrls: ['./side-menu-inferencia.component.css']
})
export class SideMenuInferenciaComponent {

  distVadMenu: MenuItem[] = [
    {
      texto: 'Distribución de Bernoulli',
      ruta: '/inferencia/vad-bernoulli'
    },
    {
      texto: 'Distribución Binomial',
      ruta: '/inferencia/vad-binomial'
    },
    {
      texto: 'Distribución Geométrica',
      ruta: '/inferencia/vad-geometrica'
    },
    {
      texto: 'Distribución de Pascal',
      ruta: '/inferencia/vad-pascal'
    },
    {
      texto: 'Distribución Hopergeométrica',
      ruta: '/inferencia/vad-hipergeometrica'
    },
    {
      texto: 'Distribución de Poisson',
      ruta: '/inferencia/vad-poisson'
    }
  ];

  distVacMenu: MenuItem[] = [
    {
      texto: 'Distribución normal',
      ruta: '/inferencia/vac-normal'
    },
    {
      texto: 'Distribución gamma',
      ruta: '/inferencia/vac-gamma'
    },
    {
      texto: 'Distribución exponencial',
      ruta: '/inferencia/vac-exponencial'
    },
    {
      texto: 'Distribución Chi-cuacrado',
      ruta: '/inferencia/vac-chicuadrado'
    },
    {
      texto: 'Distribución t-Student',
      ruta: '/inferencia/vac-tstudent'
    },
    {
      texto: 'Distribución F',
      ruta: '/inferencia/vac-f'
    }
  ];


  tlcMenu: MenuItem[] = [
    {
      texto: 'Aprox. de Binomial a Normal',
      ruta: '/inferencia/tlc-binomial-normal'
    },
    {
      texto: 'Aprox. de Hiper. a Normal',
      ruta: '/inferencia/tlc-hipergeometrica-normal'
    },
    {
      texto: 'Aprox. de Poisson. a Normal',
      ruta: '/inferencia/tlc-poisson-normal'
    },
    {
      texto: 'Aprox. de Chi-cuad. a Normal',
      ruta: '/inferencia/tlc-chicuadrado-normal'
    }
  ];

  btn1: string = 'collapsed';
  item1: string = 'collapse';
  btn2: string = 'collapsed';
  item2: string = 'collapse';
  btn3: string = '';
  item3: string = 'show';
  aria3: string = 'false';

  constructor( ) { 
  }

  asignar( input: string ){

    if( input === 'btn3') {
      this.btn3 = '';
      this.item3 = 'show';
      this.aria3 = 'true';
    }
  }

}
