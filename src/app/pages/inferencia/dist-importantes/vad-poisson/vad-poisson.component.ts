import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-vad-poisson',
  templateUrl: './vad-poisson.component.html',
  styleUrls: ['../importantes.css', './vad-poisson.component.css']
})
export class VadPoissonComponent implements OnInit {

  ngOnInit(): void {
    this.title.setTitle('Inferencia | v.a.d. Poisson');
  }

  constructor( private title: Title ) { }

  //ecuaciones
  landa = '\\lambda (\\lambda > 0)';
  x = 'X \\sim P(\\lambda)';

  funcion = 'f(x) = P[X=x] = \\dfrac{e^{-\\lambda }{(\\lambda)^x}}{x!}, \\     \\ \\ x = 0,1,2,...';

  suma = '\\displaystyle\\sum_{k=0}^{\\infty} \\dfrac{(\\lambda)^k}{k!} = e^k'

  suma2 = '\\displaystyle\\sum_{k=0}^{\\infty}\\dfrac{e^{-\\lambda }{(\\lambda)^x}}{x!} = e^{-\\lambda}\\displaystyle\\sum_{k=0}^{\\infty} \\dfrac{(\\lambda)^k}{k!} = e^{-\\lambda}e^{\\lambda} = e^0 = 1';

  //nota
  mt = 'mt^3';

  //teorema
  me = '\\mu = \\lambda';
  vari = '\\sigma^2 = \\lambda';

}
