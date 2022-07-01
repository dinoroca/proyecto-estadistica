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

  constructor( private title: Title ) { }

}
