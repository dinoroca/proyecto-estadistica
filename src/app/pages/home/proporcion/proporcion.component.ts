import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proporcion',
  templateUrl: './proporcion.component.html',
  styleUrls: ['./proporcion.component.css']
})
export class ProporcionComponent implements OnInit {

  sigma = '\\sigma^2';
  mu = '\\mu';
  n = 'n';
  p = 'p';

  constructor() { }

  ngOnInit(): void {
  }

}
