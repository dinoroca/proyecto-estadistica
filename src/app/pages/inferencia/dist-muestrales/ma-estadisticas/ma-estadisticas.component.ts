import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ma-estadisticas',
  templateUrl: './ma-estadisticas.component.html',
  styleUrls: ['../muestrales.css']
})
export class MaEstadisticasComponent implements OnInit {

  constructor() { }
//Ecuaciones
  Y = 'Y = H(X_1,X_2,...,X_n)';
  y = 'y = H(x_1,x_2,...,x_n)';
  medM = '\\overline{X}=\\displaystyle\\frac{1}{n}\\sum_{i=1}^{n}X_i';
  medm = '\\overline{x}=\\displaystyle\\frac{1}{n}\\sum_{i=1}^{n}x_i';
  varM = 'S^2=\\displaystyle\\frac{1}{n}\\sum_{i=1}^{n}(X_i-\\overline{X})^2';
  varm = 's^2=\\displaystyle\\frac{1}{n}\\sum_{i=1}^{n}(x_i-\\overline{x})^2';
  desE = 's=\\sqrt{s^2}';
  P = '\\widehat{P}';
  P1 = '\\overline{P}';
  p = 'p';
  p1 = '\\overline{p}'
  p2 = '\\widehat{p}';
  pb = '\\overline{P}=\\displaystyle\\frac{1}{n}\\sum_{i=1}^{n}X_i';
  Pb = '\\overline{P}=\\displaystyle\\frac{X}{n}, donde  X \\sim B(n,p)';
  X = 'X_i \\sim B(1,p)'






  ngOnInit(): void {
  }

}
