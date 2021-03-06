import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-tlc-chicuad-normal',
  templateUrl: './tlc-chicuad-normal.component.html',
  styleUrls: ['../importantes.css']
})
export class TlcChicuadNormalComponent implements OnInit {

  ngOnInit(): void {
    this.title.setTitle('Inferencia | Chi-cuadrado - Normal');
  }

  constructor( private title: Title ) { }

  //Ecuaciones
  x = 'X \\sim \\chi^{2}(r)';
  phi = '\\Phi';
  sqrt2 = '\\sqrt{2x}';
  nraiz = 'N\\left(\\sqrt{2r-1}, 1 \\right)';
  z = 'Z = \\sqrt{2X}-\\sqrt{2r-1} \\sim N(0,1)';
  pxa = 'P[X - a] = P\\left[Z \\leq \\sqrt{2a}-\\sqrt{2r-1} \\right] \\cong \\Phi\\left(\\sqrt{2a} - \\sqrt{2r-1} \\right)';

}
