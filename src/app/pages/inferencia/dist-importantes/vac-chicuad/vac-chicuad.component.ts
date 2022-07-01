import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-vac-chicuad',
  templateUrl: './vac-chicuad.component.html',
  styleUrls: ['../importantes.css']
})
export class VacChicuadComponent implements OnInit {

  ngOnInit(): void {
    this.title.setTitle('Inferencia | v.a.c. Chi-Cuadrado');
  }

  constructor( private title: Title ) { }

}
