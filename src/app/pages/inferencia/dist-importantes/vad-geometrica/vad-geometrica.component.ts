import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-vad-geometrica',
  templateUrl: './vad-geometrica.component.html',
  styleUrls: ['../importantes.css', './vad-geometrica.component.css'],
})
export class VadGeometricaComponent implements OnInit {

  ngOnInit(): void {
    this.title.setTitle('Inferencia | v.a.d. Geométrica');
  }

  constructor( private title: Title ) { }

  //ecuaciones
  p = 'p';
  q = 'q=1-p';
  desigualdad = '0<p<1';
  omegaConj = '\\Omega = \\{E, FE, FFE,...,\\}';
  qp = 'q^{k-1}p';
  funcion = 'f(x)=P[X=x]=q^{x-1}p, \\ \\ \\ x=1,1,..,etc.';
  funcion1 = '\\displaystyle\\sum_{k=0}^{\\infty}r^k = 1+r+r^2+r^3+...=\\frac{1}{1-r}, \\ \\ si \\mid r \\mid < 1';
  funcion2 = '\\displaystyle\\sum_{k=0}^{\\infty}q^{k-1}p = p(1+q+q^2+q^3+...) = p\\left(\\frac{1}{1-q}\\right) = p\\left(\\frac{1}{q}\\right) = 1';

  //teorema
  teoremaa = '\\ \\ \\mu = \\dfrac{1}{p}';
  teoremab = '\\ \\ \\sigma^2 = \\dfrac{q}{p^2}';

}
