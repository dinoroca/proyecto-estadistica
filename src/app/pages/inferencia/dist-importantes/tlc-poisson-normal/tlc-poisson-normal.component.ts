import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tlc-poisson-normal',
  templateUrl: './tlc-poisson-normal.component.html',
  styleUrls: ['../importantes.css']
})
export class TlcPoissonNormalComponent implements OnInit {

  //Ecuaciones
  n = 'n';
  xi = 'X_{i}';
  x = 'X = \\displaystyle\\sum_{i = 1}^{n} X_i';
  xn = 'X_{1}, X_{2},\\ldots, X_{n}, n,';
  lambda = '\\lambda';
  z = 'Z = \\dfrac{X - n\\lambda}{\\sqrt{n\\lambda}}';
  n01 = 'N(0, 1)';

  constructor() { }

  ngOnInit(): void {
  }

}
