import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-vac-exponencial',
  templateUrl: './vac-exponencial.component.html',
  styleUrls: ['../importantes.css']
})
export class VacExponencialComponent implements OnInit {

  ngOnInit(): void {
    this.title.setTitle('Inferencia | v.a.c. Exponencial');
  }

  constructor(private title: Title) { }

  // variables
  x = 'X';
  alpha = '\\alpha';
  beta = '\\beta';
  beta2 = '(\\beta \\geq 0)';
  dexpo = `X \\sim Exp(${this.beta})`;
  fundensidexpo = `f(x) = \\left\\{\\begin{array}{lcc}
    ${this.beta} e^{-${this.beta} x}, & si & x\\geq0\\\\
    \\\\ 0, & si & x<1\\\\
    \\end{array}
    \\right.`;
  alpha1 = '\\alpha=1';
  dgamma1 = 'X \\sim \\Gamma(1,\\beta)';
  medexp = '\\mu=\\dfrac{1}{\\beta}';
  varexp = '\\sigma^2=\\dfrac{1}{\\beta^2}';
  interv1 = '[0,+\\infty)';
  fdistacum = 'f(x)=P[X \\leq x] = \\int_0^x \\beta e^{-\\beta x} dt = 1 - e^{-\\beta x}, 0 \\leq x < \\infty';
}
