import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-dm-media',
  templateUrl: './dm-media.component.html',
  styleUrls: ['../muestrales.css']
})
export class DmMediaComponent implements OnInit {

  ngOnInit(): void {
    this.title.setTitle('Inferencia | d.m. Media');
  }

  constructor( private title: Title ) { }

  x = 'x';
  n = 'n';
  x2 = 'x_1 , X_2 , X_3 ,...';
  xn = 'X_{1}, X_{2}, \\ldots, X_{n}';
  fx = 'f(x)';
  mu = '\\mu';
  sigma2 = '\\sigma^2';
  xs = '\\bar{X}';
  ex = 'E(\\bar{X})=\\mu';
  z ='Z= \\dfrac{\\bar{X}-\\mu}{\\sigma / \\sqrt{n}}';
  varx ='Var(\\bar{X})= \\dfrac{\\sigma^2}{n}';
  ex2 = 'E(X_i)= \\mu';
  varx2 = 'Var(X_i)=\\sigma^2';
  ex3 = 'E(\\bar{X})=E\\left(  \\dfrac{1}{n} \\displaystyle \\sum_{i=1}^{n} X_i \\right) = \\dfrac{1}{n} \\displaystyle \\sum_{i=1}^{n} E(X_i)=n \\mu = \\mu.';
  var3 = 'Var(\\bar{X})=V\\left(  \\dfrac{1}{n} \\displaystyle \\sum_{i=1}^{n} X_i \\right) = \\dfrac{1}{n^2} \\displaystyle \\sum_{i=1}^{n} V(X_i)= \\dfrac{1}{n^2}n \\sigma^2 = \\dfrac{\\sigma^2}{n}.';
  z2 ='Z= \\dfrac{\\bar{X}-\\mu}{\\sigma / \\sqrt{n}} = \\dfrac{\\displaystyle\\sum_{i=1}^{n} X_{i}-n\\mu}{\\sigma\\sqrt{n}}';
  n2 = 'N(\\mu, \\sigma^2 / n )';
  n30 = 'n \\geq 30';
  n3 = 'N(\\mu, \\sigma^2 )';
  nm2 = 'n \\geq 2';
  varm ='Var(\\bar{X})=\\dfrac{\\sigma^2}{n}'
  sigma2x ='\\sigma_{\\bar{X}}^2 = \\dfrac{\\sigma^2}{n} \\left( \\dfrac{N-n}{N-1}  \\right)';
  factorc = '\\dfrac{N-n}{N-1}';
  ninf='N \\rightarrow + \\infty';
  N = 'N';
  N01 = 'N(0,1)';

}
