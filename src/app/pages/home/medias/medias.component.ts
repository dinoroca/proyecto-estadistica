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
  mu = '\\mu';
  n = 'n';

  // sinMarcar: boolean = false;
  mostrarSugerencia: boolean = false;
  mensajeSugerencia: String = 'Esto es una prueba';
  ecuacionSugerencia: string = '';

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
    valorN: [, [Validators.required, Validators.min(0)]]
  })

  campoEsValido( campo: string ) {
    return this.formCondiciones.controls[campo].errors && 
        this.formCondiciones.controls[campo].touched;
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
      this.formCondiciones.controls['media'].value &&
      this.formCondiciones.controls['varianza'].value &&
      this.formCondiciones.controls['normal'].value &&
      (this.formCondiciones.controls['valorN'].value > 0)
      ){
      this.mensajeSugerencia = 'Se puede usar la Z';
    }
    
    else if(
      this.formCondiciones.controls['media'].value &&
      this.formCondiciones.controls['varianza'].value &&
      (this.formCondiciones.controls['normal'].value == false || 
      this.formCondiciones.controls['normal'].value == null) &&
      (this.formCondiciones.controls['valorN'].value >= 30)
      ){
      this.mensajeSugerencia = 'Se puede usar la Z';
    }
    
    else if(
      this.formCondiciones.controls['media'].value &&
      (this.formCondiciones.controls['varianza'].value == false || 
      this.formCondiciones.controls['varianza'].value == null) &&
      this.formCondiciones.controls['normal'].value &&
      (this.formCondiciones.controls['valorN'].value >= 30)
      ){
      this.mensajeSugerencia = 'Se puede usar la Z';
    }
    
    else if(
      (this.formCondiciones.controls['media'].value == false || 
      this.formCondiciones.controls['media'].value == null) &&
      (this.formCondiciones.controls['varianza'].value == false || 
      this.formCondiciones.controls['varianza'].value == null) &&
      this.formCondiciones.controls['normal'].value &&
      (this.formCondiciones.controls['valorN'].value >= 30)
      ){
      this.mensajeSugerencia = 'Se puede usar la T';
      console.log('Usa la T')
    } 
    
    else {
      this.mensajeSugerencia = 'No se tiene datos suficientes';
    }

    console.log(this.formCondiciones.value);
    this.formCondiciones.reset();
  }

  constructor( private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
    this.formCantidad.setValue( this.porDefecto );
  }

}
