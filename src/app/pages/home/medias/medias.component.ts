import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { KatexOptions } from 'ng-katex';

@Component({
  selector: 'app-medias',
  templateUrl: './medias.component.html',
  styleUrls: ['./medias.component.css']
})
export class MediasComponent implements OnInit {

  mathequations = '\\sum_{i=1}^nx_i + f(x,y)=\\sqrt{\\dfrac{x+y}{x-y}}';
  options: KatexOptions = {
    displayMode: true,
  };

  sigma = '\\sigma^2';
  mu = '\\mu';
  n = 'n';

  formCantidad: FormGroup = this.formBuilder.group({
    numPoblation: ['1', Validators.required]
  });

  porDefecto = {
    numPoblation: '1'
  }

  constructor( private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
    this.formCantidad.setValue( this.porDefecto );
  }

}
