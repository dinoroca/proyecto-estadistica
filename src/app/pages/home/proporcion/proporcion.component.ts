import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-proporcion',
  templateUrl: './proporcion.component.html',
  styleUrls: ['./proporcion.component.css']
})
export class ProporcionComponent implements OnInit {

  ngOnInit(): void {
    this.formCantidad.setValue( this.porDefecto, );
    this.title.setTitle('Inicio | Dist. Proporción');
  }

  constructor( private formBuilder: FormBuilder,
                private title: Title ) { }


  sigma = '\\sigma^2';
  mu = '\\mu';
  n = 'n';
  n1 = 'n_1';
  n2 = 'n_2';
  rho = '\\rho';

  mostrarSugerencia: boolean = false;
  mostrarSugerencia2: boolean = false;
  ecuacion = '';
  mensajeSugerencia: String = '';
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
    pobN1: [false],
    pobN2: [false]
  });

  campoEsValido( campo: string ) {
    return this.formCondiciones.controls[campo].errors && 
        this.formCondiciones.controls[campo].touched;
  }

  //Para una población
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

  //para 2 poblaciones
  guardar2(){
    this.mostrarSugerencia2 = true;
    //Primer caso
    if(
      (this.formCondiciones2.controls['pobN1'].value == false ||
      this.formCondiciones2.controls['pobN1'].value == null) &&
      (this.formCondiciones2.controls['pobN2'].value == false ||
      this.formCondiciones2.controls['pobN2'].value == null)
    ){
      this.mensajeError = false;
      this.mensajeSugerencia = 'Se puede usar la distribución Z y la ecuación es:';
      this.ecuacion = 'Z = \\dfrac{(\\hat{p_{1}} - \\hat{p_{2}})-(\\rho_{1} - \\rho_{2})}{\\sqrt{ \\dfrac{\\rho_{1} q_1}{n_1} + \\dfrac{\\rho_{2} q_2}{n_2} }} \\sim N(0, 1)';
    }
    else if(
      this.formCondiciones2.controls['pobN1'].value &&
      this.formCondiciones2.controls['pobN2'].value
    ){
      this.mensajeError = false;
      this.mensajeSugerencia = 'Como se tiene N1 y N2, se debe usar la Z con el factor de corrección y la ecuación es:';
      this.ecuacion = 'Z = \\dfrac{(\\hat{p_{1}} - \\hat{p_{2}})-(\\rho_{1} - \\rho_{2})}{\\sqrt{ \\dfrac{\\rho_{1} q_1}{n_1} \\left(\\dfrac{N_{1} -n_{1}}{N_{1} -1} \\right) + \\dfrac{\\rho_{2} q_2}{n_2} \\left(\\dfrac{N_{2} -n_{2}}{N_{2} -1} \\right)}} \\sim N(0, 1)';
    }
    else{
      this.mensajeError = true;
      this.mensajeSugerencia = 'Los datos ingresados son incorrectos, verifique y vuelva a ingresar.';
      this.ecuacion = '';
    }
  }

}
