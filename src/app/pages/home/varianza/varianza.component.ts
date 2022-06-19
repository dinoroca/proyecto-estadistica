import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-varianza',
  templateUrl: './varianza.component.html',
  styleUrls: ['./varianza.component.css']
})
export class VarianzaComponent implements OnInit {

  sigma = '\\sigma^2';
  mu = '\\mu';
  n = 'n';
  n1 = 'n_1';
  n2 = 'n_2';
  sigma1 = '\\sigma_{1}^2';
  sigma2 = '\\sigma_{2}^2';
  mu1 = '\\mu_1';
  mu2 = '\\mu_2';

  formCantidad: FormGroup = this.formBuilder.group({
    numPoblation: ['1', Validators.required]
  });

  porDefecto = {
    numPoblation: '1'
  }
  mostrarSugerencia: boolean = false;
  mostrarSugerencia2: boolean = false;
  ecuacion = '';
  mensajeSugerencia: String = '';
  ecuacionSugerencia: string = '';
  mensajeError: boolean = false;

  formCondiciones: FormGroup = this.formBuilder.group({
    distribucionN: [true],
    varianza: [false],
    valorn: [, [Validators.required, Validators.min(1)]]
  });

  formCondiciones2: FormGroup = this.formBuilder.group({
    media1: [true],
    media2: [true],
    varianza1: [false],
    varianza2: [false],
    varianzasIguales: [false],
    normal: [true],
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

  ngOnInit(): void {
  }

  guardar(){
    this.mostrarSugerencia = true;

    if(this.formCondiciones.invalid){
      this.formCondiciones.markAllAsTouched();
      return;
    }

    //Primer caso
    if(
      (this.formCondiciones.controls['valorn'].value > 0) &&
      this.formCondiciones.controls['varianza'].value &&
      this.formCondiciones.controls['distribucionN'].value
    ){
      this.mensajeError = false;
      this.mensajeSugerencia = 'Se puede usar la distribución X (Chi-cuadrado) y la ecuación es:';
      this.ecuacion = '\\Chi^{2} = \\dfrac{( n-1 )s^2}{\\sigma^2} \\sim \\chi_{(n-1)gl}^{2}';
    }

    //Segundo caso
    else if(
      (this.formCondiciones.controls['valorn'].value > 0) &&
      this.formCondiciones.controls['varianza'].value &&
      (this.formCondiciones.controls['distribucionN'].value == false || 
      this.formCondiciones.controls['distribucionN'].value == null)
    ){
      this.mensajeError = false;
      this.mensajeSugerencia = 'Se puede usar la distribución X (Chi-cuadrado) y la ecuación es:';
      this.ecuacion = '\\Chi^{2} = \\dfrac{( n-1 )s^2}{\\sigma^2} \\sim \\chi_{(n-1)gl}^{2}';
    }

    else{
      this.mensajeError = true;
      this.mensajeSugerencia = 'Los datos ingresados son incorrectos, verifique y vuelva a ingresar.';
      this.ecuacion = '';
    }

  }

  guardar2(){
    this.mostrarSugerencia2 = true;

    if(this.formCondiciones2.invalid){
      this.formCondiciones2.markAllAsTouched();
      return;
    }

    //1er caso
    if(
      this.formCondiciones2.controls['varianza1'].value &&
      this.formCondiciones2.controls['varianza2'].value &&
      this.formCondiciones2.controls['normal'].value &&
      this.formCondiciones2.controls['varianzasIguales'].value &&
      (this.formCondiciones2.controls['valorN1'].value > 0) &&
      (this.formCondiciones2.controls['valorN2'].value > 0)
      ){
      this.mensajeError = false;
      this.mensajeSugerencia = 'Se puede usar la distribución Z y la ecuación es:';
      this.ecuacion = 'F = \\dfrac{S_{1}^{2}}{S_{2}^{2}} \\sim F_{(n_{1}-1; n_{2}-1)gl}';
    }
    
    //Segundo caso
    else if(
      (this.formCondiciones2.controls['varianza1'].value == false ||
      this.formCondiciones2.controls['varianza1'].value == null) &&
      this.formCondiciones2.controls['varianza2'].value &&
      this.formCondiciones2.controls['normal'].value &&
      this.formCondiciones2.controls['varianzasIguales'].value &&
      (this.formCondiciones2.controls['valorN1'].value > 0) &&
      (this.formCondiciones2.controls['valorN2'].value > 0)
      ){
      this.mensajeError = false;
      this.mensajeSugerencia = 'Se puede usar la distribución Z y la ecuación es:';
      this.ecuacion = 'F = \\dfrac{S_{1}^{2}}{S_{2}^{2}} \\sim F_{(n_{1}-1; n_{2}-1)gl}';
    }

    //Tercer caso
    else if(
      this.formCondiciones2.controls['varianza1'].value &&
      (this.formCondiciones2.controls['varianza2'].value == false ||
      this.formCondiciones2.controls['varianza2'].value == null) &&
      this.formCondiciones2.controls['normal'].value &&
      this.formCondiciones2.controls['varianzasIguales'].value &&
      (this.formCondiciones2.controls['valorN1'].value > 0) &&
      (this.formCondiciones2.controls['valorN2'].value > 0)
      ){
      this.mensajeError = false;
      this.mensajeSugerencia = 'Se puede usar la distribución Z y la ecuación es:';
      this.ecuacion = 'F = \\dfrac{S_{1}^{2}}{S_{2}^{2}} \\sim F_{(n_{1}-1; n_{2}-1)gl}';
    }

    //Cuarto caso
    else if(
      this.formCondiciones2.controls['varianza1'].value &&
      this.formCondiciones2.controls['varianza2'].value &&
      this.formCondiciones2.controls['normal'].value &&
      (this.formCondiciones2.controls['varianzasIguales'].value == false ||
      this.formCondiciones2.controls['varianzasIguales'].value == null) &&
      (this.formCondiciones2.controls['valorN1'].value > 0) &&
      (this.formCondiciones2.controls['valorN2'].value > 0)
      ){
      this.mensajeError = false;
      this.mensajeSugerencia = 'Se puede usar la distribución Z y la ecuación es:';
      this.ecuacion = 'F = \\dfrac{S_{1}^{2} \\sigma_{2}^2 }{S_{2}^{2} \\sigma_{1}^2} \\sim F_{(n_{1}-1; n_{2}-1)gl}';
    }
    else{
      this.mensajeError = true;
      this.mensajeSugerencia = 'Datos insuficientes, verifique y vuelva a ingresar.';
      this.ecuacion = '';
    }

  }

}
