import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vad-pascal',
  templateUrl: './vad-pascal.component.html',
  styleUrls: ['../importantes.css', './vad-pascal.component.css']
})
export class VadPascalComponent implements OnInit {

  constructor() { }
  //ecuacion
  r = 'r';
  p = 'p';
  q = '1-p';
  Rx = ' R_{X} = \\{r, r+1, r+2,...\\}';
  k = 'k \\in R_{X}';
  X = 'X \\sim P(r,p)'

  ecuacion = 'C_{r-1}^{k-1}\\ p^{r-1}q^{k-r}p = C_{r-1}^{k-1}\\ p^{1}q^{k-r}';
  funcion = 'f(k) = P[Y=k] = C_{r-1}^{k-1}\\ p^{r-1}q^{k-r}, \\ \\ \\ \\ k = r, r+1, r+2,...,etc';
  ecuacion2 = '(1-q)^{-r} = \\displaystyle\\sum_{k=0}^{\\infty} C_{i}^{-r}(-q)^i = \\displaystyle\\sum_{k=0}^{\\infty}C_{r-1}^{k-1}\\ q^{k-r}';

  //nota
  Xs = 'X_{1}, X_{2}, \\ldots, X_{r},\\  r';
  x1 = 'X_{1}';
  x2 = 'X_{2}';
  xr = 'X_{r}';
  xvar = 'X = \\displaystyle\\sum_{i=1}^{r}X_i';

  //teorema
  teoremaa = '\\ \\ \\mu = r\\dfrac{1}{p}';
  teoremab = '\\ \\ \\sigma^2 = r\\dfrac{q}{p^2}';

  //prueba
  ecuacion3 = 'E(X) = E\\left(\\displaystyle\\sum_{i=1}^{r}X_i\\right) = \\displaystyle\\sum_{i=1}^{r}E(X_i) = \\displaystyle\\sum_{i=1}^{r}\\dfrac{1}{p} = r\\dfrac{1}{p}';

  ecuacion4 = 'V(X) = V\\left(\\displaystyle\\sum_{i=1}^{r}X_i\\right) = \\displaystyle\\sum_{i=1}^{r}V(X_i) = \\displaystyle\\sum_{i=1}^{r}\\dfrac{q}{p^2} = r\\dfrac{q}{p^2} ';


  ngOnInit(): void {
  }

}
