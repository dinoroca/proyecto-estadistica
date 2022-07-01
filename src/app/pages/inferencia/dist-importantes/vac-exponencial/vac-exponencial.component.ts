import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-vac-exponencial',
  templateUrl: './vac-exponencial.component.html',
  styleUrls: ['../importantes.css']
})
export class VacExponencialComponent implements OnInit {

  ngOnInit(): void {
    this.title.setTitle('Inferencia | v.a.c. Exponencial');
  }

  constructor( private title: Title ) { }

}
