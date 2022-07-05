import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-vac-normal',
  templateUrl: './vac-normal.component.html',
  styleUrls: ['../importantes.css']
})
export class VacNormalComponent implements OnInit {

  ngOnInit(): void {
    this.title.setTitle('Inferencia | v.a.c. Normal');
  }

  constructor( private title: Title ) {}

  // variables
  x = 'X';
  xminus = 'x';
  mu ='\\mu';
  xmu = `${this.x}=${this.mu}`;
  xminuscmu = `${this.xminus}=${this.mu}`;
  intervalo = '-\\infty<x<+\\infty';
  intervalomu = '-\\infty<\\mu<+\\infty, \\sigma > 0';
  rho = '\\rho';
  sigma = '\\sigma';
  sigma2 = '\\sigma^2';
  fdemu = 'f(\\mu)=\\dfrac{1}{\\sigma \\sqrt{2\\pi}}';
  fmuigual = 'f(\\mu+x)=f(\\mu-x)';
  xmenosmu2 = '(x-\\mu)^2';
  dnormal = `X \\sim N(\\mu, ${this.sigma2})`;
  fdex = 'f(x)';
  fundensidnormal = `f(x) =  \\dfrac{1}{\\sigma \\sqrt{2\\pi}} e^{-\\frac{1}{2}(\\frac{x-\\mu}{\\sigma})^2}`;
  limfdex = `\\lim\\limits_{x \\to -\\infty} f(x)=0 \\text{ y } \\lim\\limits_{x \\to +\\infty} f(x)=0`;
  xmumenossigma = 'x=\\mu-\\sigma';
  xmumassigma = 'x=\\mu+\\sigma';
  intervaloxmu = '\\mu-\\sigma < x < \\mu +\\sigma';
  omega = '\\omega';
  bigOmega = '\\Omega';
  landa = '\\landa';

  conjunto = '\\omega = \\{(\\omega_{1},\\omega_{2},...,\\omega_{n}/\\omega_{i} = E';
  conjunto2 = 'F \\}';
  pq = 'p^{x}q^{n-k}';


}
