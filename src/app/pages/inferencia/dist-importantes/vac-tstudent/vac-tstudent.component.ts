import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-vac-tstudent',
  templateUrl: './vac-tstudent.component.html',
  styleUrls: ['../importantes.css']
})
export class VacTstudentComponent implements OnInit {

  ngOnInit(): void {
    this.title.setTitle('Inferencia | v.a.c. T-student');
  }

  constructor( private title: Title ) {}

  // ecuaciones
  t = 'T';
  r = 'r';
  tmin = 't';
  dt = 'T \\sim t(r)';
  fundensidt = `f(x) = \\left\\{\\begin{array}{lcc}
    \\dfrac{\\Gamma[(r+1)/2]}{\\Gamma(r/2) \\sqrt{r(\\pi)}} \\left(1 + \\dfrac{t^2}{r} \\right)^{-(r+1)/2}, & -\\infty < t < \\infty\\\\
    \\end{array}
    \\right.`;
  x = 'X';
  medt = '\\mu=0';
  vart = '\\sigma^2=\\dfrac{r}{r-2},  r > 2';
  norm = 'N(0,1)';
  rinf = ' r \\rightarrow +\\infty';
  r30 = 'r \\geq 30';
}
