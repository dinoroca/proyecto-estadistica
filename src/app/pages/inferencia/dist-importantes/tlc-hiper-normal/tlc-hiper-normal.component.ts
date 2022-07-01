import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { KatexOptions } from 'ng-katex';

@Component({
  selector: 'app-tlc-hiper-normal',
  templateUrl: './tlc-hiper-normal.component.html',
  styleUrls: ['../importantes.css']
})
export class TlcHiperNormalComponent implements OnInit {

  ngOnInit(): void {
    this.title.setTitle('Inferencia | Hipergeom. - Normal');
  }

  constructor( private title: Title ) { }

  //Ecuaciones
  options: KatexOptions = {
    displayMode: true,
  };

  x = 'x';
  n = 'n';
  r = 'r';
  n01 = 'N(0, 1)';
  munp = '\\mu = n\\rho';
  signpq = '\\sigma^{2} = n\\rho q \\dfrac{N-n}{N-1}';
  pr = '\\rho = \\dfrac{r}{N}';
  q1p = 'q = 1-\\rho';
  ninf = 'n \\to +\\infty';
  z = 'Z = \\dfrac{Z-n\\rho}{\\sqrt{n\\rho q\\dfrac{N-n}{N-1}}}';

}
