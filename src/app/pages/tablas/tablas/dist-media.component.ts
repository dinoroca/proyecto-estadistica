import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dist-media',
  templateUrl: './dist-media.component.html',
  styleUrls: ['./dist-media.component.css']
})
export class TablasComponent implements OnInit {

  //Ecuaciones
  zMenor = 'P[Z \\leq x]';
  x = 'x';

  formZ: FormGroup = this.formBuilder.group({
    valorZ: ['', Validators.required]
  });

  mostrarValorZ: boolean = false;
  error: boolean = false;
  respZ: number = 0;
  res?: number;

  pi = Math.PI;
  e = Math.E;

  constructor( private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
  }

  calcularZ() {

    this.mostrarValorZ = true;

    var n = this.formZ.controls['valorZ'].value;
    var x = n/(Math.sqrt(2));
       
        for (let i = 0; i <100; i++) {
            var res = ((Math.pow(-1, i))*(Math.pow(x, 2*i +1)))/((2*i+1)*(this.factorial(i)));
            this.respZ = this.respZ + res;
        }        
        var funErf2 = 2/(Math.sqrt(Math.PI)) * this.respZ;        
        console.log( funErf2 );
        
        var respuesta =  (funErf2) * 0.5 + 0.5;
        console.log('la respuesta 2 es: ' + respuesta);
        
        this.res = respuesta;

        this.borrar();

  }

  public factorial( n: number ){
    var aux  = 1;
    for (let j = 2; j <= n; j++) {
        aux *= j;
    }
    return aux;
}

public borrar (){
  this.respZ = 0;
}

}
