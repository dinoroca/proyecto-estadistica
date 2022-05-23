import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculadoraRoutingModule } from './calculadora-routing.module';
import { DistMediaComponent } from './dist-media/dist-media.component';
import { DistProporcionComponent } from './dist-proporcion/dist-proporcion.component';
import { DistVarianzaComponent } from './dist-varianza/dist-varianza.component';


@NgModule({
  declarations: [
    DistMediaComponent,
    DistProporcionComponent,
    DistVarianzaComponent
  ],
  imports: [
    CommonModule,
    CalculadoraRoutingModule
  ]
})
export class CalculadoraModule { }
