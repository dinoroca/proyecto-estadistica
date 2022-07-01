import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-dm-dif-dos-varianzas',
  templateUrl: './dm-dif-dos-varianzas.component.html',
  styleUrls: ['../muestrales.css']
})
export class DmDifDosVarianzasComponent implements OnInit {

  //Ecuaciones
  zmay = 'Z';
  mayig = '\\geq';
  x1bar = '\\bar{X_1}';
  x2bar = '\\bar{X_2}';
  n1 = 'n_1';
  n2 = 'n_2';
  n01 = 'N(0, 1)';
  mu1 = '\\mu_1';
  mu2 = '\\mu_2';
  sigma1 = '\\sigma_1';
  sigma2 = '\\sigma_2';
  mux1bar = '\\mu_{\\bar{X_1}-\\bar{X_2}} = E(\\bar{X_1}-\\bar{X_2}) =E(\\bar{X_1})-E(\\bar{X_2}) = \\mu_{1}-\\mu_{2}.';
  sigmax1bar = '\\sigma_{\\bar{X_1}-\\bar{X_2}}^2 = V(\\bar{X_1}-\\bar{X_2}) = V(\\bar{X_1})+V(\\bar{X_2}) = \\dfrac{\\sigma_{1}^{2}}{n_1}+\\dfrac{\\sigma_{2}^{2}}{n_2}.';
  z = 'Z = \\dfrac{\\bar{X_1}-\\bar{X_2}-(\\mu_{1}-\\mu_{2})}{\\sqrt{\\dfrac{\\sigma_{1}^{2}}{n_1}+\\dfrac{\\sigma_{2}^{2}}{n_2}}}';

  nmu1 = 'N(\\mu_{1}, \\sigma_{1}^{2} / n_{1})';
  nmu2 = 'N(\\mu_{2}, \\sigma_{2}^{2} / n_{2})';
  sigma1n = '\\dfrac{\\sigma_{1}^{2}}{n_1}+\\dfrac{\\sigma_{2}^{2}}{n_2}';
  nmusigma1 = 'N(\\mu_{1}, \\sigma_{1}^2)';
  nmusigma2 = 'N(\\mu_{2}, \\sigma_{2}^2)';
  sigmaigual = '\\sigma_{1}^{2} = \\sigma_{1}^{2} = \\sigma^{2}';
  sigmadif  = '\\sigma_{1}^{2} != \\sigma_{1}^{2}';
  nmu12 = 'N \\left(\\mu_{1}-\\mu_{2}, \\dfrac{\\sigma_{1}^{2}}{n_1}+\\dfrac{\\sigma_{2}^{2}}{n_2} \\right)';
  zx1x2bar = 'Z = \\dfrac{\\bar{X_1}-\\bar{X_2}-(\\mu_{1}-\\mu_{2})}{\\sqrt{\\dfrac{\\sigma_{1}^{2}}{n_1}+\\dfrac{\\sigma_{2}^{2}}{n_2}}} = \\dfrac{\\bar{X_1}-\\bar{X_2}-(\\mu_{1}-\\mu_{2})}{\\sqrt[\\sigma]{\\dfrac{1}{n_1}+\\dfrac{1}{n_2}}}';

  n1men1 = '\\dfrac{(n_{1}-1)\\hat{S}_{1}^{2}}{\\sigma_{1}^{2}} \\sim \\chi^{2}(n_{1}-1)';
  n2men1 = '\\dfrac{(n_{2}-1)\\hat{S}_{2}^{2}}{\\sigma_{2}^{2}} \\sim \\chi^{2}(n_{2}-1)';
  v = 'V = \\dfrac{(n_{1}-1)\\hat{S}_{1}^{2}}{\\sigma_{1}^{2}} + \\dfrac{(n_{2}-1)\\hat{S}_{2}^{2}}{\\sigma_{2}^{2}} \\sim \\chi^{2}(n_{1}+n_{2}-2)';
  tz = 'T=\\dfrac{Z}{\\sqrt{\\dfrac{V}{n_{1}+n_{2}-2}}} = \\dfrac{(\\bar{X}_{1} - \\bar{X}_{2}) -(\\mu_{1} - \\mu_{2})}{\\sqrt{\\dfrac{\\hat{S}_{C}^{2}}{n_1} + \\dfrac{\\hat{S}_{C}^{2}}{n_2}}}';

  sc = '\\hat{S}_{C}^{2}';
  sc2 = '\\hat{S}_{C}^{2} = \\dfrac{(n_{1}-1)\\hat{S}_{1}^{2} + (n_{2}-1)\\hat{S}_{2}^{2}}{n_{1}+n_{2} -2}';
  tx1 = 'T = \\dfrac{(\\bar{X}_{1} - \\bar{X}_{2}) -(\\mu_{1} - \\mu_{2})}{\\sqrt{\\dfrac{\\hat{S}_{C}^{2}}{n_1} + \\dfrac{\\hat{S}_{C}^{2}}{n_2}}}';

  g = 'g = \\dfrac{\\left[\\dfrac{\\hat{S}_{1}^{2}}{n_1} + \\dfrac{\\hat{S}_{2}^{2}}{n_2} \\right]^2} {\\dfrac{\\left[ \\dfrac{\\hat{S}_{1}^{2}}{n_1} \\right]^2}{n_{1}-1} + \\dfrac{\\left[ \\dfrac{\\hat{S}_{2}^{2}}{n_2} \\right]^2}{n_{2}-1}}';
  x1xn = 'X_{1}, X_{2}, \\ldots, X_{n_1}';
  y1yn = 'Y_{1}, Y_{2}, \\ldots, Y_{n_2}';
  p1 = 'p_1';
  p2 = 'p_2';
  b1p = 'B(1, p_1)';
  b2p = 'B(1, p_2)';
  p1bar = '\\overline{P_1} = \\dfrac{\\displaystyle\\sum_{i=1}^{n} X_i}{n_1} = \\dfrac{X}{n_1}';
  p2bar = '\\overline{P_2} = \\dfrac{\\displaystyle\\sum_{i=1}^{n} Y_i}{n_1} = \\dfrac{Y}{n_2}';
  p1b = '\\overline{P_1}';
  p2b = '\\overline{P_2}';
  xb = 'X \\sim B(n_{1}, p_{1})';
  yb = 'Y \\sim B(n_{2}, p_{2})';
  mup1p2 = '\\mu_{\\bar{P_1}-\\bar{P_2} }^{2} = E(\\overline{P_1} - \\overline{P_2}) = E(\\overline{P_1})-E(\\overline{P_2}) = p_{1}-p_{2}';
  sigp1p2 = '\\sigma_{\\bar{P_1}-\\bar{P_2} }^{2} = V(\\overline{P_1} - \\overline{P_2}) = V(\\overline{P_1})+V(\\overline{P_2}) = \\dfrac{p_{1}(1-p_{1})}{n_1} + \\dfrac{p_{2}(1-p_{2})}{n_2}';
  zp1p2 = 'Z = \\dfrac{\\overline{P_1} - \\overline{P_2} - (p_{1}-p_{2})}{\\sigma_{\\bar{P_1}-\\bar{P_2} }}';
  sigpp = '\\sigma_{\\bar{P_1}-\\bar{P_2} }';
  sigppr = '\\sigma_{\\bar{P_1}-\\bar{P_2}} = \\sqrt{\\dfrac{p_{1}(1-p_{1})}{n_1} + \\dfrac{p_{2}(1-p_{2})}{n_2}}';

  s1s2 = '\\hat{S}_{1}^{2} / \\hat{S}_{2}^{2}';
  s1 = '\\hat{S}_{1}^{2}';
  s2 = '\\hat{S}_{2}^{2}';
  nmu11 = 'N(\\mu_{1}, \\sigma_{1}^{2})';
  nmu112 = 'N(\\mu_{2}, \\sigma_{2}^{2})';
  f = 'F';
  fs = ' F = \\dfrac{\\hat{S}_{1}^{2} / \\sigma_{1}^{2}} {\\hat{S}_{2}^{2} / \\sigma_{2}^{2}}';
  ffn = 'F \\sim F(n_{1}-1, n_{2}-1)';

  un1 = 'U = (n_{1}-1) \\hat{S}_{1}^{2} / \\sigma_{1}^{2}';
  chi = '\\chi^{2}';
  vn2 = 'V = (n_{2}-1) \\hat{S}_{2}^{2} / \\sigma_{2}^{2}';
  fuv = 'F = \\dfrac{U/(n_{1}-1)}{V/(n_{2}-1)} = \\dfrac{\\hat{S}_{1}^{2} / \\sigma_{1}^{2}} {\\hat{S}_{2}^{2} / \\sigma_{2}^{2}}';
  sigma12 = '\\sigma_{1}^{2}';
  sigma22 = '\\sigma_{2}^{2}';
  fss = 'F = \\hat{S}_{1}^{2} / \\hat{S}_{2}^{2}';

  ngOnInit(): void {
    this.title.setTitle('Inferencia | d.m. dif. Varianzas');
  }

  constructor( private title: Title ) { }
  

}
