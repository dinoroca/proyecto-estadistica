import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InferenciaRoutingModule } from './inferencia-routing.module';
import { InferenciaComponent } from './inferencia.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DistribucionesComponent } from './distribuciones/distribuciones.component';


@NgModule({
  declarations: [
    InferenciaComponent,
    DistribucionesComponent
  ],
  imports: [
    CommonModule,
    InferenciaRoutingModule,
    SharedModule
  ]
})
export class InferenciaModule { }
