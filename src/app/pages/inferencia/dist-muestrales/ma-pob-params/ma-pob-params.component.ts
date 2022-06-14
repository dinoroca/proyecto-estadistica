import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
