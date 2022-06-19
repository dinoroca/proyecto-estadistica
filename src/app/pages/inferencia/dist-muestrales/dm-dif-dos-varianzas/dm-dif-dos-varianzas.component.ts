import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
