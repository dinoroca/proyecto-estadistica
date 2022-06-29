import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-vac-gamma',
  templateUrl: './vac-gamma.component.html',
  styleUrls: ['../importantes.css']
})
export class VacGammaComponent implements OnInit {

  ngOnInit(): void {
    this.title.setTitle('Inferencia | v.a.c. Gamma');
  }

  constructor( private title: Title ) { }

}
