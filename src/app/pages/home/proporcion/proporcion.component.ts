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
  rho = '\\rho';

  mostrarSugerencia: boolean = false;
  mostrarSugerencia2: boolean = false;
  ecuacion = '';
  mensajeSugerencia: String = 'Prueba';
  ecuacionSugerencia: string = '';
  valorq = 0;
  pn = 0;
  qn = 0;

  mensajeError: boolean = false;

  formCantidad: FormGroup = this.formBuilder.group({
    numPoblation: ['1', Validators.required]
  });

  porDefecto = {
    numPoblation: '1'
  }

  formCondiciones: FormGroup = this.formBuilder.group({
    poblacionN: [false],
    valorn: [, [Validators.required, Validators.min(1)]],
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



  constructor( private formBuilder: FormBuilder ) { }

  guardar(){
    this.mostrarSugerencia = true;
    this.valorq = Number((1 - this.formCondiciones.controls['valorP'].value).toFixed(2));
    this.pn = this.formCondiciones.controls['valorP'].value * this.formCondiciones.controls['valorn'].value;
    this.qn = this.valorq * this.formCondiciones.controls['valorn'].value;

    if(this.formCondiciones.invalid){
      this.formCondiciones.markAllAsTouched();
      return;
    }

    //Primer caso
    if(
      (this.formCondiciones.controls['poblacionN'].value == false ||
      this.formCondiciones.controls['poblacionN'].value == null) &&
      (this.formCondiciones.controls['valorn'].value >= 30) &&
      this.pn >= 5 && this.qn >= 5
    ){
      this.mensajeError = false;
      this.mensajeSugerencia = 'Se puede usar la distribución Z y la ecuación es:';
      this.ecuacion = 'Z = \\dfrac{\\hat{p}-\\rho}{\\sqrt{\\dfrac{\\rho q}{n}}} \\sim N(0, 1)';
    }

    //Segundo caso
    else if(
      this.formCondiciones.controls['poblacionN'].value &&
      (this.formCondiciones.controls['valorn'].value >= 30) &&
      this.pn >= 5 && this.qn >= 5
    ){
      this.mensajeError = false;
      this.mensajeSugerencia = 'Como se tiene el valor N, se debe usar la distribución Z y la ecuación es:';
      this.ecuacion = 'Z = \\dfrac{\\hat{p}-\\rho}{\\sqrt{\\dfrac{\\rho q}{n} \\cdot \\left( \\dfrac{N-n}{N-1} \\right) }} \\sim N(0, 1)';
    }

    //Tercer caso n pequeña
    else if(
      (this.formCondiciones.controls['poblacionN'].value == false ||
      this.formCondiciones.controls['poblacionN'].value == null) &&
      (this.formCondiciones.controls['valorn'].value < 30)
    ){
      this.mensajeError = false;
      this.mensajeSugerencia = 'Como n es pequeña, se debe usar la distribución Z y la ecuación es:';
      this.ecuacion = 'Z = \\dfrac{\\hat{p}\\pm\\dfrac{1}{2n} - \\rho} {\\sqrt{\\dfrac{\\rho q}{n}}} \\sim N(0, 1)';
    }
    else{
      this.mensajeError = true;
      this.mensajeSugerencia = 'Los datos ingresados son incorrectos, verifique y vuelva a ingresar.';
      this.ecuacion = '';
    }
  }

}
