import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dm-proporcion',
  templateUrl: './dm-proporcion.component.html',
  styleUrls: ['../muestrales.css']
})
export class DmProporcionComponent implements OnInit {

  constructor() { }
  x = 'x';
  X = 'X';
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
  B ='B(1,p)';
  p = 'p'
  pf='\\bar{P}=\\dfrac{X_{1}, X_{2}, \\ldots, X_{n}}{n}=\\dfrac{X}{n}'
  xn2 = 'X = X_{1}, X_{2}, \\ldots, X_{n}';
  B2 ='B(n,p)';
  mup ='\\mu_{\\bar{P}} = E(\\bar{P})= E\\left(  \\dfrac{X}{n} \\right)=\\dfrac{1}{n} E(X) = \\dfrac{1}{n} (n p)=p'
  sigma3x ='\\sigma_{\\bar{P}}^2= V\\left(  \\dfrac{X}{n} \\right)=\\dfrac{1}{n^2}V(X)=\\dfrac{1}{n^2}[n p ( 1-p)]=\\dfrac{p(1-p)}{n}';
  z3 ='Z = \\dfrac{\\bar{P}-p}{\\sqrt{p(1-p)/n}}';
  Ps = '\\bar{P}'; 
  sigma4x ='\\sigma_{\\bar{P}}= \\sqrt{\\dfrac{p(1-p)}{n}}\\sqrt{\\dfrac{N-n}{N-1}}';
  sigma5x ='\\sigma_{\\bar{P}}= \\sqrt{\\dfrac{p(1-p)}{n}}';
  p1 = 'P \\left[ \\bar{P} \\leq c\\right] \\cong P \\left[   Z \\leq \\dfrac{c -p}{\\sigma_{\\bar{P}}} \\right]';
  factorcpc = '\\dfrac{1}{2n}';
  p2 = 'P \\left[ \\bar{P} \\leq c\\right] \\cong P \\left[   Z \\leq \\dfrac{(c+1/(2n))-p)}{\\sigma_{\\bar{P}}} \\right]';
  z4 ='Z = \\dfrac{X-np}{\\sqrt{np(1-p)}}=\\dfrac{\\bar{P}-p}{\\sqrt{p(1-p)}}';






  ngOnInit(): void {
  }

}
