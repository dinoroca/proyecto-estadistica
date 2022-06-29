import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-vac-tstudent',
  templateUrl: './vac-tstudent.component.html',
  styleUrls: ['../importantes.css']
})
export class VacTstudentComponent implements OnInit {

  ngOnInit(): void {
    this.title.setTitle('Inferencia | v.a.c. T-student');
  }

  constructor( private title: Title ) { }

}
