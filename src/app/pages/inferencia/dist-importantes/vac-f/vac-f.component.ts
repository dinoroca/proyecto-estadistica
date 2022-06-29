import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-vac-f',
  templateUrl: './vac-f.component.html',
  styleUrls: ['../importantes.css']
})
export class VacFComponent implements OnInit {

  ngOnInit(): void {
    this.title.setTitle('Inferencia | v.a.c. F');
  }

  constructor( private title: Title ) { }

}
