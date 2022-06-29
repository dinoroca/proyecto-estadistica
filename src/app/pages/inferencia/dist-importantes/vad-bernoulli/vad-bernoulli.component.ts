import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-vad-bernoulli',
  templateUrl: './vad-bernoulli.component.html',
  styleUrls: ['../importantes.css', './vad-bernoulli.component.css']
})
export class VadBernoulliComponent implements OnInit {

  ngOnInit(): void {
    this.title.setTitle('Inferencia | v.a.d. Bernoulli');
  }

  constructor( private title: Title ) { }

  // ecuaciones
  Ohmega = '\\Omega';
  OhmegaF = '\\Omega = \\{E,F\\}';
  Chi =  '\\Chi';
  Epsilon ='\\Epsilon';
  rho ='\\rho';
  rhoF ='p = \\Rho[ \\Chi = 1]';
  x = 'x';
  X = 'X';
  p = 'p';
  q = 'q';
  formula ='0<\\rho<1';
  qF = 'q = [';
  qF2 = '= 0 ] = 1 -\\rho';
  formula2 = 'f(x) = \\Rho[';
  formula21 = '=x]= \\rho^{x}q^{1-x}';
  formula3 = 'x = 0,1';
  formula4 = `F(x)=\\left\\{\\begin{array}{lcc}
  0, & si & x<0\\\\
  \\\\ q, & si & 0\\leq x<1\\\\
  \\\\ 1, & si & x\\geq1
  \\end{array}
  \\right.`;
  formula5 = 'f(x)';
  valorEsperado = 'E(X) = p';
  varianza = 'Var(X) = pq';

  pruebaA = '\\mu = E(X) = 0\\times (1-p)+1\\times p = p';
  pruebaB = '\\sigma^2 = E(X^2)-\\mu^2 = [(0)^2(1-p)+(1)^2( p )]-p^2 = p-p^2 = pq';

  nota = '\\sigma^2 = p - p^2  = -\\left(p-\\dfrac{1}{2}\\right)^2+\\dfrac{1}{4}\\leq\\dfrac{1}{4}';
}
