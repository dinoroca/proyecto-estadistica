import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { KatexOptions } from 'ng-katex';

@Component({
  selector: 'app-medias',
  templateUrl: './medias.component.html',
  styleUrls: ['./medias.component.css']
})
export class MediasComponent implements OnInit{

  mathequations = '\\sum_{i=1}^nx_i + f(x,y)=\\sqrt{\\dfrac{x+y}{x-y}}';
  options: KatexOptions = {
    displayMode: true,
  };

  sigma = '\\sigma^2';
  sigma1 = '\\sigma_{1}^2';
  sigma2 = '\\sigma_{2}^2';
  mu = '\\mu';
  mu1 = '\\mu_1';
  mu2 = '\\mu_2';
  n = 'n';
  n1 = 'n_1';
  n2 = 'n_2';

  // sinMarcar: boolean = false;
  mostrarSugerencia: boolean = false;
  mostrarSugerencia2: boolean = false;
  ecuacion = '';
  mensajeSugerencia: String = '';
  mensajeSugerencia2: String = '';
  ecuacionSugerencia: string = '';

  mensajeError: boolean = false;

  formCantidad: FormGroup = this.formBuilder.group({
    numPoblation: ['1', Validators.required]
  });

  porDefecto = {
    numPoblation: '1'
  }

  formCondiciones: FormGroup = this.formBuilder.group({
    media: [false],
    varianza: [false],
    normal: [true],
    valorN: [, [Validators.required, Validators.min(1)]]
  });

  formCondiciones2: FormGroup = this.formBuilder.group({
    media1: [true],
    media2: [true],
    varianza1: [false],
    varianza2: [false],
    varianzasIguales: [false],
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

  guardar(){

    this.mostrarSugerencia = true;

    if(this.formCondiciones.invalid){
      this.formCondiciones.markAllAsTouched();
      return;
    }
    console.log(this.formCondiciones.controls['media'].value);
    console.log(this.formCondiciones.controls['varianza'].value);
    console.log(this.formCondiciones.controls['normal'].value);

    if(
      this.formCondiciones.controls['varianza'].value &&
      this.formCondiciones.controls['normal'].value &&
      (this.formCondiciones.controls['valorN'].value > 0)
      ){
      this.mensajeError = false;
      this.mensajeSugerencia = 'Se puede usar la distribución Z y la ecuación es:';
      this.ecuacion = 'Z = \\dfrac{\\bar{x}-\\mu}{\\dfrac{\\sigma}{\\sqrt{n}}} \\sim N(0,1)';
    }
    
    else if(
      this.formCondiciones.controls['varianza'].value &&
      (this.formCondiciones.controls['normal'].value == false || 
      this.formCondiciones.controls['normal'].value == null) &&
      (this.formCondiciones.controls['valorN'].value >= 30)
      ){
      this.mensajeError = false;
      this.mensajeSugerencia = 'Se puede usar la distribución Z y la ecuación es:';
      this.ecuacion = 'Z = \\dfrac{\\bar{x}-\\mu}{\\dfrac{\\sigma}{\\sqrt{n}}} \\sim N(0,1)';
    }
    
    else if(
      (this.formCondiciones.controls['varianza'].value == false || 
      this.formCondiciones.controls['varianza'].value == null) &&
      this.formCondiciones.controls['normal'].value &&
      (this.formCondiciones.controls['valorN'].value >= 30)
      ){
      this.mensajeError = false;
      this.mensajeSugerencia = 'Se puede usar la distribución Z y al ecuación es:';
      this.ecuacion = 'Z = \\dfrac{\\bar{x}-\\mu}{\\dfrac{S}{\\sqrt{n}}} \\sim N(0,1)';
    }
    
    else if(
      (this.formCondiciones.controls['varianza'].value == false || 
      this.formCondiciones.controls['varianza'].value == null) &&
      this.formCondiciones.controls['normal'].value &&
      (this.formCondiciones.controls['valorN'].value < 30)
      ){
      this.mensajeError = false;
      this.mensajeSugerencia = 'Se puede usar la distribución T-student y la ecuación es:';
      this.ecuacion = 'T_{(n-1)gl} = \\dfrac{\\bar{x}-\\mu}{\\dfrac{S}{\\sqrt{n}}} \\sim N(0,1)';
    } 
    
    else {
      this.mensajeError = true;
      this.mensajeSugerencia = 'Los compos ingresados son incorrectos, verifique sus datos.';
      this.ecuacion = '';
    }

    console.log(this.formCondiciones.value);
    // this.formCondiciones.reset();
  }

  guardar2() {
    this.mostrarSugerencia2 = true;

    if(this.formCondiciones2.invalid){
      this.formCondiciones2.markAllAsTouched();
      return;
    }
    //1er caso
    if(
      this.formCondiciones2.controls['varianza1'].value &&
      this.formCondiciones2.controls['varianza2'].value &&
      (this.formCondiciones2.controls['normal'].value == false ||
      this.formCondiciones2.controls['normal'].value == null) &&
      (this.formCondiciones2.controls['varianzasIguales'].value == false ||
      this.formCondiciones2.controls['varianzasIguales'].value == null) &&
      (this.formCondiciones2.controls['varianzasDiferentes'].value == false ||
      this.formCondiciones2.controls['varianzasDiferentes'].value == null) &&
      (this.formCondiciones2.controls['reemplazo'].value == false ||
      this.formCondiciones2.controls['reemplazo'].value == null) &&
      (this.formCondiciones2.controls['valorN1'].value > 30) &&
      (this.formCondiciones2.controls['valorN2'].value > 30)
      ){
      this.mensajeError = false;
      this.mensajeSugerencia = 'Se puede usar la distribución Z y la ecuación es:';
      this.ecuacion = 'Z = \\dfrac{(\\bar{X}_{1}-\\bar{X}_{2})-(\\mu_{1}-\\mu_{2})}{\\sqrt{\\dfrac{\\sigma_{1}^2}{n_{1}}+\\dfrac{\\sigma_{2}^2}{n_2}}}';
    }
    //Segundo caso
    else if(
      this.formCondiciones2.controls['varianza1'].value &&
      this.formCondiciones2.controls['varianza2'].value &&
      this.formCondiciones2.controls['normal'].value &&
      (this.formCondiciones2.controls['varianzasIguales'].value == false ||
      this.formCondiciones2.controls['varianzasIguales'].value == null) &&
      (this.formCondiciones2.controls['varianzasDiferentes'].value == false ||
      this.formCondiciones2.controls['varianzasDiferentes'].value == null) &&
      (this.formCondiciones2.controls['reemplazo'].value == false ||
      this.formCondiciones2.controls['reemplazo'].value == null) &&
      (this.formCondiciones2.controls['valorN1'].value > 0) &&
      (this.formCondiciones2.controls['valorN2'].value > 0)
      ){
      this.mensajeError = false;
      this.mensajeSugerencia = 'Se puede usar la distribución Z y la ecuación es:';
      this.ecuacion = 'Z = \\dfrac{(\\bar{X}_{1}-\\bar{X}_{2})-(\\mu_{1}-\\mu_{2})}{\\sqrt{\\dfrac{\\sigma_{1}^2}{n_{1}}+\\dfrac{\\sigma_{2}^2}{n_2}}}';
    }
    //tercer caso
    else if(
      this.formCondiciones2.controls['varianza1'].value &&
      this.formCondiciones2.controls['varianza2'].value &&
      (this.formCondiciones2.controls['normal'].value == false ||
      this.formCondiciones2.controls['normal'].value == null) &&
      (this.formCondiciones2.controls['varianzasIguales'].value == false ||
      this.formCondiciones2.controls['varianzasIguales'].value == null) &&
      (this.formCondiciones2.controls['varianzasDiferentes'].value == false ||
      this.formCondiciones2.controls['varianzasDiferentes'].value == null) &&
      this.formCondiciones2.controls['reemplazo'].value &&
      (this.formCondiciones2.controls['valorN1'].value > 30) &&
      (this.formCondiciones2.controls['valorN2'].value > 30)
      ){
      this.mensajeError = false;
      this.mensajeSugerencia = 'Se puede usar la distribución Z con el factor de corrección y la ecuación es:';
      this.ecuacion = 'Z = \\dfrac{(\\bar{X}_{1}-\\bar{X}_{2})-(\\mu_{1}-\\mu_{2})}{\\sqrt{\\dfrac{\\sigma_{1}^2}{n_{1}}\\left(\\dfrac{N_{1}-n_{1}}{n_{1}-1}\\right)+\\dfrac{\\sigma_{2}^2}{n_2} \\left(\\dfrac{N_{2}-n_{2}}{n_{2}-1}\\right)}}';
    }
    //Cuarto caso
    else if(
      this.formCondiciones2.controls['varianza1'].value &&
      this.formCondiciones2.controls['varianza2'].value &&
      this.formCondiciones2.controls['normal'].value &&
      (this.formCondiciones2.controls['varianzasIguales'].value == false ||
      this.formCondiciones2.controls['varianzasIguales'].value == null) &&
      (this.formCondiciones2.controls['varianzasDiferentes'].value == false ||
      this.formCondiciones2.controls['varianzasDiferentes'].value == null) &&
      this.formCondiciones2.controls['reemplazo'].value &&
      (this.formCondiciones2.controls['valorN1'].value > 0) &&
      (this.formCondiciones2.controls['valorN2'].value > 0)
      ){
      this.mensajeError = false;
      this.mensajeSugerencia = 'Se puede usar la distribución Z con el factor de corrección y la ecuación es:';
      this.ecuacion = 'Z = \\dfrac{(\\bar{X}_{1}-\\bar{X}_{2})-(\\mu_{1}-\\mu_{2})}{\\sqrt{\\dfrac{\\sigma_{1}^2}{n_{1}}\\left(\\dfrac{N_{1}-n_{1}}{n_{1}-1}\\right)+\\dfrac{\\sigma_{2}^2}{n_2} \\left(\\dfrac{N_{2}-n_{2}}{n_{2}-1}\\right)}}';
    }
    //Quinto caso
    else if(
      (this.formCondiciones2.controls['varianza1'].value == false ||
      this.formCondiciones2.controls['varianza1'].value == null) &&
      (this.formCondiciones2.controls['varianza2'].value == false || 
      this.formCondiciones2.controls['varianza2'].value ==  null) &&
      (this.formCondiciones2.controls['normal'].value == false ||
      this.formCondiciones2.controls['normal'].value == null) &&
      (this.formCondiciones2.controls['varianzasIguales'].value == false ||
      this.formCondiciones2.controls['varianzasIguales'].value == null) &&
      (this.formCondiciones2.controls['varianzasDiferentes'].value == false ||
      this.formCondiciones2.controls['varianzasDiferentes'].value == null) &&
      (this.formCondiciones2.controls['reemplazo'].value == false ||
      this.formCondiciones2.controls['reemplazo'].value == null) &&
      (this.formCondiciones2.controls['valorN1'].value > 30) &&
      (this.formCondiciones2.controls['valorN2'].value > 30)
      ){
      this.mensajeError = false;
      this.mensajeSugerencia = 'Se puede usar la distribución Z y la ecuación es:';
      this.ecuacion = 'Z = \\dfrac{(\\bar{X}_{1}-\\bar{X}_{2})-(\\mu_{1}-\\mu_{2})}{\\sqrt{\\dfrac{S_{1}^2}{n_{1}}+\\dfrac{S_{2}^2}{n_2}}}';
    }
    //6to caso
    else if(
      this.formCondiciones2.controls['varianza1'].value &&
      this.formCondiciones2.controls['varianza2'].value &&
      this.formCondiciones2.controls['varianzasIguales'].value &&
      (this.formCondiciones2.controls['varianzasDiferentes'].value == false ||
      this.formCondiciones2.controls['varianzasDiferentes'].value == null) &&
      (this.formCondiciones2.controls['reemplazo'].value == false ||
      this.formCondiciones2.controls['reemplazo'].value == null) &&
      (this.formCondiciones2.controls['valorN1'].value < 30) &&
      (this.formCondiciones2.controls['valorN2'].value < 30)
      ){
      this.mensajeError = false;
      this.mensajeSugerencia = 'Se puede usar la distribución T-student con el factor de corrección y la ecuación es:';
      this.ecuacion = 'T_{(n_{1}+n_{2}-2)gl} = \\dfrac{(\\bar{X}_{1}-\\bar{X}_{2})-(\\mu_{1}-\\mu_{2})} {\\sqrt{\\left(\\dfrac{(n_{1}-1)S_{1}^{2}+(n_{2}-1)S_{2}^{2}}{n_{1}-n_{2}-2} \\right) \\left(\\dfrac{1}{n_1} + \\dfrac{1}{n_2} \\right)}}';
    }
    //Septiomo caso
    else if(
      this.formCondiciones2.controls['varianza1'].value &&
      this.formCondiciones2.controls['varianza2'].value &&
      (this.formCondiciones2.controls['varianzasIguales'].value == false ||
      this.formCondiciones2.controls['varianzasIguales'].value == null) &&
      this.formCondiciones2.controls['varianzasDiferentes'].value &&
      (this.formCondiciones2.controls['reemplazo'].value == false ||
      this.formCondiciones2.controls['reemplazo'].value == null) &&
      (this.formCondiciones2.controls['valorN1'].value < 30) &&
      (this.formCondiciones2.controls['valorN2'].value < 30)
      ){
      this.mensajeError = false;
      this.mensajeSugerencia = 'Se puede usar la distribución T-student con el factor de corrección y la ecuación es:';
      this.ecuacion = 'T_{(g)gl} = \\dfrac{(\\bar{X}_{1}-\\bar{X}_{2})-(\\mu_{1}-\\mu_{2})} {\\sqrt{\\dfrac{S_{1}^2}{n_{1}}+\\dfrac{S_{2}^2}{n_2}}}; \\hspace{0.2in} g = \\dfrac{\\left( \\dfrac{S_{1}^{2}}{n_1} +\\dfrac{S_{2}^{2}}{n_1} \\right)^2}{\\dfrac{\\left(\\dfrac{S_{1}^{2}}{n_1} \\right)^2}{n_{1}+1} + \\dfrac{\\left(\\dfrac{S_{2}^{2}}{n_2} \\right)^2}{n_{2}+1}} -2';
    }
    else{
      this.mensajeError = true;
      this.mensajeSugerencia2 = 'Los compos ingresados son incorrectos, verifique sus datos.';
      this.ecuacion = '';
    }
  }

  constructor( private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
    this.formCantidad.setValue( this.porDefecto );
  }

}
