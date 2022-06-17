import { Component, OnInit } from '@angular/core';
import { KatexOptions } from 'ng-katex';

@Component({
  selector: 'app-tlc-bimomial-normal',
  templateUrl: './tlc-bimomial-normal.component.html',
  styleUrls: ['../importantes.css']
})
export class TlcBimomialNormalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  options: KatexOptions = {
    displayMode: true,
  };

  //Ecuaciones
  n = 'n';
  x = 'x';
  rho = '\\rho';
  n01 = 'N(0, 1)';
  xi = 'X_i';
  xn = 'X_{1}, X_{2}, \\ldots, X_{n}';
  mu = '\\mu';
  sigma2 = '\\sigma^2';
  i123 = 'i = 1,2,3, \\ldots, n';
  ex = 'E(X_i) = \\mu';
  varx = 'Var(X_i) = \\sigma^2';

  yn = 'Y_{n} = X_{1}, X_{2}, \\ldots, X_{n}';
  eyn = 'E(Y_n)';
  muyn = '\\mu_{Y_{n}}';
  varyn = 'Var(Y_{n})';
  sigmayn = '\\sigma_{Y_{n}}^2 = n\\sigma^2';

  zn = 'Z_{n} = \\dfrac{Y_{n}-\\mu_{Y_{n}}}{\\sigma_{Y_n}} = \\dfrac{\\displaystyle\\sum_{i=1}^{n} X_{i}-n\\mu}{\\sigma\\sqrt{n}}';

  limp = '\\lim\\\limits_{n \\to \\infty}P[Z_{n} \\leq b] = \\dfrac{1}{\\sqrt{2\\pi}} \\displaystyle\\int_{-\\infty}^{b} e^{-t^{2/2}}dt = \\Phi(b)';
  sigman = '\\sigma_{Y_{n}} = \\sigma\\sqrt{n}';
  pyn = 'P[Y_{n} \\leq b] \\cong P\\left[ Z_{n} \\leq \\dfrac{b-n\\mu}{\\sigma\\sqrt{n}} \\right]';
  nmay30 = 'n \\geq 30';
  nmen30 = 'n < 30';

  pynk = 'P[Y_{n} = k] \\cong P[k-0.5 \\leq Y_{n} \\leq k+0.5]';
  payn = 'P[a \\leq Y_{n} \\leq b] \\cong P[a-0.5 \\leq Y_{n} \\leq b+0.5]';
  muxi = '\\mu_{x_i} = \\rho';
  sigxi = '\\sigma_{X_i}^2';
  q1p = 'q = 1-\\rho';
  xsum = 'X = \\displaystyle\\sum_{i=1}^{n} X_i';
  mux = '\\mu_{X} = n\\rho';
  npq = '\\sigma_{X}^{2} = n\\rho q';

  z2 = 'Z = \\dfrac{\\displaystyle\\sum_{i=1}^{n} X_{i} -n\\mu_{X_i}}{\\sqrt{n\\sigma_{X_i}^2}} = \\dfrac{X-n\\rho}{\\sqrt{n\\rho q}}';
  z3 = 'Z = \\dfrac{X-n\\rho}{\\sqrt{n\\rho q}}';
  pax = 'P[a \\leq X \\leq b] \\cong P[a-0.5 \\leq X \\leq b+0.5] \\cong \\Phi\\left[\\dfrac{b+0.5-n\\rho}{\\sqrt{n\\rho q}} \\right]-\\Phi\\left[\\dfrac{a-0.5-n\\rho}{\\sqrt{n\\rho q}} \\right]';
  pxk = 'P[X = k] = P[k-0.5 \\leq X \\leq k+0.5]';
  ninf = 'n \\to +\\infty';

}
