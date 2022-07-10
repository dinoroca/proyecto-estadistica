import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-vac-f',
  templateUrl: './vac-f.component.html',
  styleUrls: ['../importantes.css']
})
export class VacFComponent implements OnInit {

  ngOnInit(): void {
    this.title.setTitle('Inferencia | v.a.c. F');
  }

  constructor( private title: Title ) {}

  // ecuacion
  
  r1 = 'r_1';
  r2 = 'r_2';
  f = 'F';
  df = 'F \\sim F(r_1, r_2)';
  fundensidf = `f(x) = \\left\\{\\begin{array}{lcc}
    \\dfrac{\\left( \\dfrac{r_1}{r_2} \\right)^{r_1/2} \\Gamma \\left( \\dfrac{r_1 + r_2}{2}\\right)}{\\Gamma \\left( \\dfrac{r_1}{2}\\right) \\Gamma \\left( \\dfrac{r_2}{2}\\right)} \\dfrac{x^{(r_1/2)-1}}{\\left( 1 + \\dfrac{r_1 x}{r_2}\\right)^{(r_1+r_2)/2} }, & 0 \\leq t < \\infty\\\\
    \\end{array}
    \\right.`;
  x = 'X';
  medt = '\\mu=0';
  vart = '\\sigma^2=\\dfrac{r}{r-2},  r > 2';
  norm = 'N(0,1)';
  rinf = ' r \\rightarrow +\\infty';
  r30 = 'r \\geq 30';
  u = 'U';
  v = 'V';
  distu = 'U \\sim \\chi^2 (r_1)';
  distv = 'V \\sim \\chi^2 (r_2)';
  xuv = 'X = \\dfrac{U/r_1}{V/r_2}';
  dfr = 'F(r_1, r_2)';
  unox = '1/X';
  finv = 'F_{1-\\alpha . r_1 . r_2} = \\dfrac{1}{F_{\\alpha . r_1 . r_2}}';
}
