import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-vac-gamma',
  templateUrl: './vac-gamma.component.html',
  styleUrls: ['../importantes.css']
})
export class VacGammaComponent implements OnInit {

  ngOnInit(): void {
    this.title.setTitle('Inferencia | v.a.c. Gamma');
  }

  constructor(private title: Title) { }

  // variables
  x = 'X';
  alpha = '\\alpha';
  beta = '\\beta';
  dgamma = `X \\sim \\Gamma(${this.alpha}, ${this.beta})`;
  fundensidgamma = `f(x) = \\left\\{\\begin{array}{lcc}
    \\dfrac{${this.beta}^${this.alpha}}{\\Gamma(${this.alpha})}x^{\\alpha-1}e^{-\\beta x}, & si & x\\geq0\\\\
    \\\\ 0, & si & x<1\\\\
    \\end{array}
    \\right.`;
  medg = '\\mu=\\dfrac{\\alpha}{\\beta}';
  varg = '\\sigma^2=\\dfrac{\\alpha}{\\beta^2}';


}
