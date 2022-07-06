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
      texto: 'Distribución Hipergeométrica',
      ruta: '/inferencia/vad-hipergeometrica'
    },
    {
      texto: 'Distribución de Poisson',
      ruta: '/inferencia/vad-poisson'
    }
  ];

  distVacMenu: MenuItem[] = [
    {
      texto: 'Distribución Normal',
      ruta: '/inferencia/vac-normal'
    },
    {
      texto: 'Distribución Gamma',
      ruta: '/inferencia/vac-gamma'
    },
    {
      texto: 'Distribución Exponencial',
      ruta: '/inferencia/vac-exponencial'
    },
    {
      texto: 'Distribución Chi-Cuadrado',
      ruta: '/inferencia/vac-chicuadrado'
    },
    {
      texto: 'Distribución T-Student',
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

  maMenu: MenuItem[] = [
    {
      texto: 'Población y parámetros',
      ruta: '/inferencia-ma/poblaciones-parametros'
    },
    {
      texto: 'Tipos de muestras',
      ruta: '/inferencia-ma/tipos-de-muestra'
    },
    {
      texto: 'M. A. Estadísticas',
      ruta: '/inferencia-ma/ma-estadisticas'
    }
  ];

  dmMenu: MenuItem[] = [
    {
      texto: 'Distribución muestral de la media',
      ruta: '/inferencia-ma/dm-media'
    },
    {
      texto: 'Distribución muestral de la proporción',
      ruta: '/inferencia-ma/dm-proporcion'
    },
    {
      texto: 'Distribución muestral de la varianza',
      ruta: '/inferencia-ma/dm-varianza'
    },
    {
      texto: 'D. M. de la diferencia de medias',
      ruta: '/inferencia-ma/dm-dos-medias'
    },
    {
      texto: 'D. M. de la diferencia de proporciones',
      ruta: '/inferencia-ma/dm-dos-proporciones'
    },
    {
      texto: 'D. M. de la diferencia de varianzas',
      ruta: '/inferencia-ma/dm-dos-varianzas'
    },
  ]

  constructor( ) { 
  }

}
