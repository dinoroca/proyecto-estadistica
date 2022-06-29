import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-tlc-poisson-normal',
  templateUrl: './tlc-poisson-normal.component.html',
  styleUrls: ['../importantes.css']
})
export class TlcPoissonNormalComponent implements OnInit {

  ngOnInit(): void {
    this.title.setTitle('Inferencia | Poisson - Normal');
  }

  constructor( private title: Title ) { }

  //Ecuaciones
  n = 'n';
  xi = 'X_{i}';
  x = 'X = \\displaystyle\\sum_{i = 1}^{n} X_i';
  xn = 'X_{1}, X_{2},\\ldots, X_{n}, n,';
  lambda = '\\lambda';
  z = 'Z = \\dfrac{X - n\\lambda}{\\sqrt{n\\lambda}}';
  n01 = 'N(0, 1)';

}
