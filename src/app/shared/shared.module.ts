import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideMenuHomeComponent } from './side-menu-home/side-menu-home.component';
import { SideMenuInferenciaComponent } from './side-menu-inferencia/side-menu-inferencia.component';
import { SideMenuCalculadoraComponent } from './side-menu-calculadora/side-menu-calculadora.component';
import { RouterModule } from '@angular/router';
import { ScrolltopComponent } from './scrolltop/scrolltop.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SideMenuHomeComponent,
    SideMenuInferenciaComponent,
    SideMenuCalculadoraComponent,
    ScrolltopComponent,

  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SideMenuHomeComponent,
    SideMenuInferenciaComponent,
    SideMenuCalculadoraComponent,
    RouterModule,
    ScrolltopComponent
    
  ]
})
export class SharedModule { }
