import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculadoraRoutingModule } from './tablas-routing.module';
import { TablasComponent } from './tablas/dist-media.component';
import { ReactiveFormsModule } from '@angular/forms';
import { KatexModule } from 'ng-katex';


@NgModule({
  declarations: [
    TablasComponent,
  ],
  imports: [
    CommonModule,
    CalculadoraRoutingModule,
    KatexModule,
    ReactiveFormsModule
  ]
})
export class CalculadoraModule { }
