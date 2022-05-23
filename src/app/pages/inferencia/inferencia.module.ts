import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InferenciaRoutingModule } from './inferencia-routing.module';
import { InferenciaComponent } from './inferencia.component';


@NgModule({
  declarations: [
    InferenciaComponent
  ],
  imports: [
    CommonModule,
    InferenciaRoutingModule
  ]
})
export class InferenciaModule { }
