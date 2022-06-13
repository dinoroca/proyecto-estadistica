import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-proporcion',
  templateUrl: './proporcion.component.html',
  styleUrls: ['./proporcion.component.css']
})
export class ProporcionComponent {

  sigma = '\\sigma^2';
  mu = '\\mu';
  n = 'n';
  p = 'p';

  mostrarSugerencia: boolean = false;
  mostrarSugerencia2: boolean = false;
  ecuacion = '';
  mensajeSugerencia: String = '';
  ecuacionSugerencia: string = '';

  mensajeError: boolean = false;

  formCantidad: FormGroup = this.formBuilder.group({
    numPoblation: ['1', Validators.required]
  });

  formCondiciones: FormGroup = this.formBuilder.group({
    poblacionN: [false],
    valorN: [, [Validators.required, Validators.min(0), Validators.max(1)]],
    valorP: [, [Validators.required, Validators.min(0), Validators.max(1)]]
  });

  formCondiciones2: FormGroup = this.formBuilder.group({
    media1: [false],
    media2: [false],
    varianza1: [false],
    varianza2: [false],
    mediasIguales: [false],
    varianzasDiferentes: [false],
    normal: [false],
    reemplazo: [false],
    valorN1: [, [Validators.required, Validators.min(1)]],
    valorN2: [, [Validators.required, Validators.min(1)]]
  });

  campoEsValido( campo: string ) {
    return this.formCondiciones.controls[campo].errors && 
        this.formCondiciones.controls[campo].touched;
  }

  campoEsValido2( campo: string ) {
    return this.formCondiciones2.controls[campo].errors && 
        this.formCondiciones2.controls[campo].touched;
  }

  porDefecto = {
    numPoblation: '1'
  }


  constructor( private formBuilder: FormBuilder ) { }

  guardar(){

  }

}
