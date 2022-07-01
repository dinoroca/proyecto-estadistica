import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-dm-dif-dos-proporciones',
  templateUrl: './dm-dif-dos-proporciones.component.html',
  styleUrls: ['../muestrales.css']
})
export class DmDifDosProporcionesComponent implements OnInit {

  ngOnInit(): void {
    this.title.setTitle('Inferencia | d.m. dif. Proporciones');
  }

  constructor( private title: Title ) { }
  
  //Ecuaciones
  X = 'X_1,X_2,...,X_{n_1}'
  Y = 'Y_1,Y_2,...,Y_{n_2}'
  n1 = 'n_1'
  n2 = 'n_2'
  B1 = 'B(1,p_1)'
  B2 = 'B(1,p_2)'
  p1 = 'p_1'
  p2 = 'p_2'
  P1 = '\\overline{P_1}=\\displaystyle\\frac{\\displaystyle\\sum_{i=1}^{n_1}X_i}{n_1}=\\frac{X}{n_1}';
  P2 = '\\overline{P_2}=\\displaystyle\\frac{\\displaystyle\\sum_{i=1}^{n_2}Y_i}{n_2}=\\frac{Y}{n_2}';
  X1 = 'X \\sim B(n_1,p_1)';
  Y1 = 'Y \\sim B(n_2,p_2)';
  Pp = '\\overline{P_1}-\\overline{P_2}'
  a = '\\mu_{{\\bar{P}}_1-{\\bar{P}}_2}=E({\\overline{P}}_1-{\\overline{P}}_2)=E({\\overline{P}}_1)-E({\\overline{P}}_2)=p_1-p_2';
  b = '{\\sigma^2}_{{\\bar{p}}_1-{\\bar{p}}_2}=V\\left({\\bar{P}}_1-{\\bar{P}}_2\\right)=V\\left({\\bar{P}}_1\\right)+V\\left({\\bar{P}}_2\\right)=\\displaystyle\\frac{p_1\\left(1-p_1\\right)}{n_1}+\\frac{p_2\\left(1-p_2\\right)}{n_2}';
  Z = 'Z=\\displaystyle\\frac{{\\bar{P}}_1-{\\bar{P}}_2-({\\bar{p}}_1-{\\bar{p}}_2)}{\\sigma_{{\\bar{P}}_1-{\\bar{P}}_2}}';
  N = 'N(0,1)';
  EE = '\\sigma_{{\\bar{P}}_1-{\\bar{P}}_2}';
  FEE ='\\sigma_{{\\bar{P}}_1-{\\bar{P}}_2}=\\displaystyle\\sqrt{\\frac{p_1(1-p_1)}{n_1}+\\frac{p_2(1-p_2)}{n_2}}';

}
