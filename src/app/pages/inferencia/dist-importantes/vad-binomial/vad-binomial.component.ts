import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vad-binomial',
  templateUrl: './vad-binomial.component.html',
  styleUrls: ['../importantes.css', './vad-binomial.component.css']
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

  ecuacion1 = '\\dbinom{n}{k} = C_{k}^{n} = \\dfrac{n!}{k!(n-k)!}';
  ecuacion2 = 'P[X = k] = \\dbinom{n}{k}p^{k}q^{n-k} , \\ \\ k = 0, 1, 2, 3, ... , n';

  binomio = '\\displaystyle\\sum_{k=0}^{n}C_{k}^{n}a^k (b)^{n-k} = (a+b)^n';

  ecuacion3 = '\\displaystyle\\sum_{k=0}^{n}p^k(1-p)^{n-k} = (p+(1-p))^n = (1)^n = 1';

  chi = 'X \\sim B(n,p)';
  ecuacion4 = 'f(k) = P[X=k] = \\dbinom{n}{k}p^k q^{n-k}, \\ \\ \\ k = 0,1,2,3,...,n';

  funcion1 = `F(x)=P[X \\leq x] = \\left\\{\\begin{array}{lcc}
  0, & si & x<0\\\\
  \\\\ \\displaystyle\\sum_{k=0}^{n} \\dbinom{n}{k}p^k q^{n-k}, & si &  x=0,1,2,...,n-1\\\\
  \\\\ 1, & si & x\\geq n
  \\end{array}
  \\right.`;

  /*NOTA*/
  ecuacion5 = 'X_{1}, X_{2}, \\ldots, X_{n}';
  binomial = 'B(1,p)';
  i = 'i = 1,2,3,\\ldots, n';
  varAleatoria = 'X = \\displaystyle\\sum_{i=1}^{n} X_{i}';

  /*TEOREMA 1.2*/
  valorEsperado = '\\ E(X) = np \\ ';
  varianza = '\\ Var(X) = np(1-p)';

  /*NOTA*/
  pme = 'p = 1/2';
  pderecha = 'p \\rightarrow 1';
  pizquierda = 'p \\arrow 0';

  ngOnInit(): void {
  }

}
