import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-vad-hipergeo',
  templateUrl: './vad-hipergeo.component.html',
  styleUrls: ['../importantes.css', './vad-hipergeo.component.css']
})
export class VadHipergeoComponent implements OnInit {

  ngOnInit(): void {
    this.title.setTitle('Inferencia | v.a.d. Hipergeométrica');
  }

  constructor( private title: Title ) { }

  n = 'n \\leq r';
  x = 'X';
  rx = 'R_{x} = \\{0,1,2,...,n\\}';
  k = 'k \\in R_{X}';
  xk = '[X = k]';
  cvv = 'C_{k}^{n}\\ V_{k}^{r}\\ V_{r-k}^{N-r}';
  v = 'V_{n}^{N}';

  ecuacion = 'P[X=k] = \\dfrac{C_{k}^{n}\\ V_{k}^{r}\\ V_{r-k}^{N-r}}{V_{n}^{N}} = \\dfrac{C_{r}^{k}\\ C_{N-r}^{n-k}}{C_{n}^{N}} ';
  xhnr = 'X\\sim H(N,\\ n,\\ r)';
  ecuacion2 = 'f(k) = P[X=k] = \\dfrac{C_{k}^{r}\\ C_{n-r}^{N-k}}{C_{n}^{N}}, \\ \\ \\ \\ k  = 0,1,2,...,n.';
  ecuacion3 = '\\displaystyle\\sum_{k=0}^{n}C_{k}^{r}\\ C_{n-r}^{N-k} = C_{n}^{r+N-r} = C_{n}^{N}';

  //nota
  Nr = 'N-r \\geq n-k';
  kn = 'k \\geq n+r -N';
  a = 'a = \\text{max}(0,n+r-N)';

  knr = 'k \\leq n \\text{ y } k \\leq r';
  b = 'b = \\text{min}(n,r)';

  //teorema
  h = 'H(N,n,r)';
  p = 'p = r/N, \\ \\ q=1-p';

  esp = 'E(X) = np';
  vari = 'Var(X)  =npq \\dfrac{N-n}{N-1}';
  c = 'H(N,n,r) \\cong B(n,p)'
  inf = '+\\infty\\  \\text{o} \\ \\  N'
  bnp = 'B(n,p).'
}
