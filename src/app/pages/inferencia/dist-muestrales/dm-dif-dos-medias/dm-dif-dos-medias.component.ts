import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-dm-dif-dos-medias',
  templateUrl: './dm-dif-dos-medias.component.html',
  styleUrls: ['../muestrales.css']
})
export class DmDifDosMediasComponent implements OnInit {

  ngOnInit(): void {
    this.title.setTitle('Inferencia | d.m. dif. Medias');
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
  xs1 ='\\bar{X_1}';
  xs2 ='\\bar{X_2}';
  n1='n_1';
  n22='n_2';
  mu1 ='\\mu_1';
  mu2 ='\\mu_2';
  sigma21 ='\\sigma_1^2';
  sigma22 ='\\sigma_2^2';
  xs1mxs2 ='\\bar{X_1}-\\bar{X_2}';
  muxs1xs2 ='\\mu_{\\bar{X_1}-\\bar{X_2}}= E\\left( \\bar{X_1}-\\bar{X_2} \\right) = E\\left( \\bar{X_1} \\right)-E\\left( \\bar{X_2} \\right) = \\mu_1 - \\mu_2';
  sigma2xs1xs2 ='\\sigma_{\\bar{X_1}-\\bar{X_2}}^2 = V\\left( \\bar{X_1}-\\bar{X_2} \\right) =V\\left( \\bar{X_1} \\right)-V\\left( \\bar{X_2} \\right) = \\dfrac{\\sigma_1^2}{n_1}+\\dfrac{\\sigma_2^2}{n_2}';
  z3 ='Z= \\dfrac{\\bar{X_1}-\\bar{X_2} - \\left(  \\mu_1-\\mu_2 \\right)}{ \\sqrt{\\dfrac{\\sigma_1^2}{n_1}+\\dfrac{\\sigma_2^2}{n_2}}} ';
  zm='Z';
  n130 = 'n_1 \\geq 30';
  n230 = 'n_2 \\geq 30';
  n1form='N\\left(  \\mu_1 , \\sigma_1^2 / n_1  \\right)';
  n2form='N\\left(  \\mu_2 , \\sigma_2^2 / n_2  \\right)';
  n1m2='n_1 \\geq 2'
  n2m2='n_2 \\geq 2'
  mu1mmu2='=\\mu_1 - \\mu_2';
  varianzanota='\\dfrac{\\sigma_1^2}{n_1}+\\dfrac{\\sigma_2^2}{n_2}'
  sigmaigual = '\\sigma_1^2=\\sigma_2^2=\\sigma^2';
  nform='N\\left(  \\bar{X_1}-\\bar{X_2} , \\dfrac{\\sigma_1^2}{n_1}+\\dfrac{\\sigma_2^2}{n_2} \\right)'
  z4 = 'Z= \\dfrac{\\bar{X_1}-\\bar{X_2} - \\left(  \\mu_1-\\mu_2 \\right)}{ \\sqrt{\\dfrac{\\sigma_1^2}{n_1}+\\dfrac{\\sigma_2^2}{n_2}}} = \\dfrac{\\bar{X_1}-\\bar{X_2} - \\left(  \\mu_1-\\mu_2 \\right)}{ \\sigma \\sqrt{\\dfrac{1}{n_1}+\\dfrac{1}{n_2}}}';
  form1 ='\\dfrac{(n_1 -1)\\hat{S}_1^2}{\\sigma_1^2} \\sim \\chi^2 (n_1 - 1)';
  form2 ='\\dfrac{(n_2 -1)\\hat{S}_2^2}{\\sigma_2^2} \\sim \\chi^2 (n_2 - 1)';
  V ='V = \\dfrac{(n_1 -1)\\hat{S}_1^2}{\\sigma_1^2} + \\dfrac{(n_2 -1)\\hat{S}_2^2}{\\sigma_2^2} \\sim \\chi^2 (n_1 + n_2 - 2)';
  T = 'T = \\dfrac{Z}{\\sqrt{\\dfrac{V}{n_1 + n_2 -2}}} = \\dfrac{\\left( \\bar{X_1}-\\bar{X_2} \\right)- \\left( \\mu_1 - \\mu_2  \\right)}{\\sqrt{\\dfrac{\\hat{S}_C^2}{n_1} + \\dfrac{\\hat{S}_C^2}{n_2}}}';
  n122 = 'n_1 + n_2 -2';
  Sc2 = '\\hat{S}_C^2'
  Sc2form = '\\hat{S}_C^2 = \\dfrac{(n_1 -1)\\hat{S}_1^2 +(n_2 -1)\\hat{S}_2^2}{n_1 + n_2 -2}';
  sigmadiferente = '\\sigma_1^2  \\neq   \\sigma_2^2';
  Tb= 'T = \\dfrac{\\left( \\bar{X_1}-\\bar{X_2} \\right)- \\left( \\mu_1 - \\mu_2  \\right)}{\\sqrt{\\dfrac{\\hat{S}_1^2}{n_1} + \\dfrac{\\hat{S}_2^2}{n_2}}} ';
  gf ='g =\\dfrac{\\left[ \\dfrac{ \\hat{S}_1^2  }{n_1} +  \\dfrac{ \\hat{S}_2^2  }{n_2}  \\right]^2}{ \\dfrac{\\left[ \\dfrac{ \\hat{S}_1^2  }{n_1} \\right]^2 }{n_1 -1} + \\dfrac{\\left[ \\dfrac{ \\hat{S}_2^2  }{n_2} \\right]^2 }{n_2 -1}}';
  g = 'g';

}
