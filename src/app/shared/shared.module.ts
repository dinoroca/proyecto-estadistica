import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideMenuHomeComponent } from './side-menu-home/side-menu-home.component';
import { SideMenuInferenciaComponent } from './side-menu-inferencia/side-menu-inferencia.component';
import { SideMenuFormularioComponent } from './side-menu-formulario/side-menu-formulario.component';
import { SideMenuCalculadoraComponent } from './side-menu-calculadora/side-menu-calculadora.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SideMenuHomeComponent,
    SideMenuInferenciaComponent,
    SideMenuFormularioComponent,
    SideMenuCalculadoraComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SideMenuHomeComponent,
    SideMenuInferenciaComponent,
    SideMenuFormularioComponent,
    SideMenuCalculadoraComponent
  ]
})
export class SharedModule { }
