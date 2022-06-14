import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vad-bernoulli',
  templateUrl: './vad-bernoulli.component.html',
  styleUrls: ['../importantes.css']
})
export class VadBernoulliComponent implements OnInit {

  constructor() { }
  // ecuaciones
  Ohmega = '\\Omega';
  OhmegaF = '\\Omega = \\{E,F\\}';
  Chi =  '\\Chi';
  Epsilon ='\\Epsilon';
  rho ='\\rho';
  rhoF ='\\rho = \\Rho[ \\Chi = 1]';
  x = 'x';
  formula ='0<\\rho<1';
  q = 'q';
  qF = 'q = [';
  qF2 = '= 0 ] = 1 -\\rho';
  formula2 = 'f(x) = \\Rho[';
  formula21 = '=x]= \\rho^{x}q^{1-x}';
  formula3 = 'x = 0,1';
  formula4 = `\\left. \\begin{array}{rcl}
  2x+y & = & 1
  \\ x+y & = & 4 
  \\ x+y+z & = & 6
  \\end{array}\\right\\}`;

  ngOnInit(): void {
  }

}
