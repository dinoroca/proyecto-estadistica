import { Component, OnInit } from '@angular/core';

interface MenuItem {
  texto: string;
  ruta: string;
}

@Component({
  selector: 'app-side-menu-inferencia',
  templateUrl: './side-menu-inferencia.component.html',
  styleUrls: ['./side-menu-inferencia.component.css']
})
export class SideMenuInferenciaComponent implements OnInit {

  templateMenu: MenuItem[] = [
    {
      texto: 'Título 1',
      ruta: ''
    },
    {
      texto: 'Título 2',
      ruta: '#'
    },
    {
      texto: 'Título 3',
      ruta: '#'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
