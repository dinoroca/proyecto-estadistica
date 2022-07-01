import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-ma-tipos-muestra',
  templateUrl: './ma-tipos-muestra.component.html',
  styleUrls: ['../muestrales.css']
})
export class MaTiposMuestraComponent implements OnInit {

  ngOnInit(): void {
    this.title.setTitle('Inferencia | Tipos de muestras');
  }

  constructor( private title: Title ) { }
  
  //Ecuaciones
  Ec1 = 'X_i';
  Ec2 = 'x_i';
  Ec3 = 'x_1,x_2,...,x_n';
  Ec4 = 'X_1,X_2,...,X_n';
  fx = 'f(x)';
  X = 'X';
  mu ='\\mu';
  Var = '\\sigma^2';
  n ='n';
  fx1 ='f(x_1,x_2,...,x_n)=f(x_1)f(x_2),...,f(x_n)';
  media = 'E(X_i)=\\mu';
  Varianza = 'Var(X_i)=\\sigma^2';
  fxi = 'f(x_i)=f(x)';

}
