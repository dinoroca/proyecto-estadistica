import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-vac-chicuad',
  templateUrl: './vac-chicuad.component.html',
  styleUrls: ['../importantes.css']
})
export class VacChicuadComponent implements OnInit {

  ngOnInit(): void {
    this.title.setTitle('Inferencia | v.a.c. Chi-Cuadrado');
  }

  constructor( private title: Title ) {}

  // variables
  x = 'X';
  r = 'r';
  k = 'k';
  dchicuad = `X \\sim \\chi^2(r)`;
  fundensidchi2 = `f(x) = \\left\\{\\begin{array}{lcc}
    \\dfrac{2^{-r/2}}{\\Gamma (r/2)} x^{r/2 - 1} e^{-x/2}, & si & x\\geq0\\\\
    \\\\ 0, & si & x<1\\\\
    \\end{array}
    \\right.`;
  alpha1 = '\\alpha=r/2';
  beta1 = '\\beta=1/2';
  dgamma1 = 'X \\sim \\Gamma(r/2,1/2)';
  medexp = '\\mu=r';
  varexp = '\\sigma^2= 2 r';
  znorm = 'Z \\sim N(1,0)';
  zchi2 = 'Z^2 \\sim \\chi^2 (1)';
  znr = 'Z_1, Z_2, ..., Z_r';
  zinorm = 'Z_i \\sim N(1,0)';
  ir = 'i = 1, 2, 3, ..., r';
  sumzchi2 = '\\displaystyle\\sum_{i=1}^{r} Z_i^2 \\sim \\chi^2 (r)';
  chi2r = '\\chi^2 (r)';
  dnorm = 'N(1,0)';
  xk = 'X_1, X_2, ..., X_k';
  xichi2 = 'X_i \\sim \\chi^2 (r_i)';
  ik = 'i = 1, 2, 3, ..., k';
  sumxchi2 = '\\displaystyle\\sum_{i=1}^{k} X_i^{2} \\sim \\chi^2 (r_1 + r_2 + ... + r_k)';
}
