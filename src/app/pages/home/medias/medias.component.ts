import { Component, OnInit } from '@angular/core';
import { KatexOptions } from 'ng-katex';

@Component({
  selector: 'app-medias',
  templateUrl: './medias.component.html',
  styleUrls: ['./medias.component.css']
})
export class MediasComponent implements OnInit {

  mathequations = '\\sum_{i=1}^nx_i + f(x,y)=\\sqrt{\\dfrac{x+y}{x-y}}';
  options: KatexOptions = {
    displayMode: true,
  };

  constructor() { }

  ngOnInit(): void {
  }

}
