import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InferenciaRoutingModule } from './inferencia-routing.module';
import { InferenciaComponent } from './inferencia.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    InferenciaComponent
  ],
  imports: [
    CommonModule,
    InferenciaRoutingModule,
    SharedModule
  ]
})
export class InferenciaModule { }
