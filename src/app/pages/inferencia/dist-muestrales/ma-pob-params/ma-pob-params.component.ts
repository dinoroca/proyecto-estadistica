import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-ma-pob-params',
  templateUrl: './ma-pob-params.component.html',
  styleUrls: ['../muestrales.css']
})
export class MaPobParamsComponent implements OnInit {

  //Ecuacios del texto para
  fx = 'f(x)';
  x = 'x';
  n = 'n';
  mu = '\\mu';
  pi = '\\pi';
  ro = '\\rho';
  sigma = '\\sigma';
  sigma2 = '\\sigma^2';

  ngOnInit(): void {
    this.title.setTitle('Inferencia | Poblaciones y parámetros');
  }

  constructor( private title: Title ) { }

}
