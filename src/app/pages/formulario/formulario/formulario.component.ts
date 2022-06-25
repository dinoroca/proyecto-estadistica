import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formCantidad: FormGroup = this.formBuilder.group({
    numTitulo: ['1', Validators.required]
  });

  porDefecto = {
    numPoblation: '1'
  }

  constructor( private formBuilder: FormBuilder ) { }

  //ecuaciones DISTRIBUCIONES DE PROBABILIDAD
  //Bernoulli
  dis1 = 'X \\sim B(1,p)';
  p1 = 'P(X=x)=p^x(1-p)^{1-x} \\ \\ \\ \\ x=0,1';
  media1 = 'E(X)=p';
  varianza1 = 'V(X)=p(1-p)';

  //Binomial
  dis2 = 'X \\sim B(n,p)';
  p2 = 'P(X=x)=C_{x}^n p^x(1-p)^{n-x} \\ \\ \\ \\ x=0,1,...,n';
  media2 = 'E(X)=np';
  varianza2 = 'V(X)=np(1-p)';

  //Hipergeométrica
  dis3 = 'X \\sim H(N,r,n)';
  p3 = 'P(X=x)=\\dfrac{C_{x}^r C_{n-x}^{N-r}}{C_{n}^n } \\ \\ \\ \\ x=0,1,...,\\textup{min}(r,n)';
  media3 = 'E(X)=n\\left(\\dfrac{r}{N}\\right)';
  varianza3 = 'V(X)=n\\left(\\dfrac{r}{N}\\right)\\left(1-\\dfrac{r}{N}\\right)';

  //Poisson
  dis4 = 'X \\sim P(\\lambda)';
  p4 = 'P(X=x)=\\dfrac{e^{-\\lambda}.\\lambda^x}{x!} \\ \\ \\ \\ x=0,1,2,...';
  media4 = 'E(X)=\\lambda';
  varianza4 = 'V(X)=\\lambda';

  //Geométrica
  dis5 = 'X \\sim G(p)';
  p5 = 'P(X=x)=p(1-p)^{x-1} \\ \\ \\ \\ x=1,2,3,...';
  media5= 'E(X)=\\dfrac{1}{p}';
  varianza5 = 'V(X)=\\dfrac{1-p}{p^2}\\left(\\dfrac{N-n}{N-1}\\right)';

  //Pascal
  dis6 = 'X \\sim BN(k,p)';
  p6 = 'P(X=x)=C_{k-1}^{x-1}p^k(1-p)^{x-k} \\ \\ \\ \\ x=k,k+1,k+2,...';
  media6 = 'E(X)=\\dfrac{k}{p}';
  varianza6 = 'V(X)=\\dfrac{k(1-p)}{p}';

  //Normal
  dis7 = 'X \\sim N(\\mu,\\sigma^2)';
  p7 = 'f(x)=\\dfrac{1}{\\sqrt{2\\pi \\sigma}}e^{-\\dfrac{1}{2} \\left( \\dfrac{x-\\mu}{\\sigma}\\right)^2   } \\ \\ , \\ \\ - \\infty<x<\\infty';
media7 = 'E(X)=\\mu';
  varianza7 = 'V(X)=\\sigma^2';

  //Uniforme
  dis8 = 'X \\sim U\\left[a,b\\right]';
  p8 = 'f(x)=\\dfrac{1}{b-a} \\ \\ , \\ \\ a\\leq x \\leq b';
  media8 = 'E(X)=\\dfrac{a+b}{2}';
  varianza8 = 'V(X)=\\dfrac{(b-a)^2}{12}';

  //Gamma
  dis9 = 'X \\sim Ga(\\alpha ,1/\\beta)';
  p9 = 'f(x)=\\dfrac{1}{\\beta^\\alpha \\Gamma(\\alpha)}x^{\\alpha-1}e^{- \\dfrac{x}{\\beta}} \\ \\ , \\ \\ x>0';
  p91 = '\\alpha>0, \\beta>0';
  p92 = '\\Gamma(\\alpha) = \\int\\limits_{0}^{\\infty}x^{\\alpha-1}e^{-x} \\ \\ , \\ \\ \\alpha>0 \\ \\ \\ \\ \\Gamma(n) = (n-1)!';
media9 = 'E(X)=\\alpha \\beta';
  varianza9 = 'V(X)=\\alpha \\beta^2';

  //Exponencial
  dis10 = 'X \\sim E(1/\\beta)';
  p10 = 'f(x) = \\dfrac{1}{\\beta}e^{- \\dfrac{x}{\\beta}} \\ \\ , \\ \\ x>0';
  p101 = '\\beta >0'
  p102 = 'F(x) = P(X\\leq x) = 1-e^{- \\dfrac{x}{\\beta}}'
  media10 = 'E(X)=\\beta';
  varianza10 = 'V(X)=\\beta^2';
  //------------------------------------------







  ngOnInit(): void {
    this.formCantidad.setValue( this.porDefecto );
  }

}
