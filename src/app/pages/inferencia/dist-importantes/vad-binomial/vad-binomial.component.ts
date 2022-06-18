import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vad-binomial',
  templateUrl: './vad-binomial.component.html',
  styleUrls: ['../importantes.css']
})
export class VadBinomialComponent implements OnInit {

  constructor() { }

  //ecuaciones
  funcion = 'f(x)';
  pi = '\\pi';
  omega = '\\omega';
  bigOmega = '\\Omega';
  landa = '\\landa';

  conjunto = '\\omega = \\{(\\omega_{1},\\omega_{2},...,\\omega_{n}/\\omega_{i} = E';
  conjunto2 = 'F \\}';
  pq = 'p^{x}q^{n-k}';

  ecuacion1 = '\\binom{n}{k} = C_{k}^{n} = \\frac{n!}{k!(n-k)!}';
  ecuacion2 = 'P[X = k] = \\binom{n}{k}p^{k}q^{n-k} , \\ \\ k = 0, 1, 2, 3, ... , n';

  binomio = '\\displaystyle\\sum_{k=0}^{n}C_{k}^{n}a^k (b)^{n-k} = (a+b)^n';

  ecuacion3 = '\\displaystyle\\sum_{k=0}^{n}p^k(1-p)^{n-k} = (p+(1-p))^n = (1)^n = 1';

  chi = 'X \\sim B(n,p)'
  ngOnInit(): void {
  }

}
