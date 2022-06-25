import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculadoraRoutingModule } from './tablas-routing.module';
import { TablasComponent } from './tablas/dist-media.component';


@NgModule({
  declarations: [
    TablasComponent,
  ],
  imports: [
    CommonModule,
    CalculadoraRoutingModule
  ]
})
export class CalculadoraModule { }
