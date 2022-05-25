import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormularioRoutingModule } from './formulario-routing.module';
import { DmMediaComponent } from './dm-media/dm-media.component';
import { DmDiferencia2MediasComponent } from './dm-diferencia2-medias/dm-diferencia2-medias.component';
import { DmDiferencia2ProporcionesComponent } from './dm-diferencia2-proporciones/dm-diferencia2-proporciones.component';
import { DmProporcionComponent } from './dm-proporcion/dm-proporcion.component';
import { DmRazon2VarianzasComponent } from './dm-razon2-varianzas/dm-razon2-varianzas.component';
import { DmVarianzaComponent } from './dm-varianza/dm-varianza.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    DmMediaComponent,
    DmDiferencia2MediasComponent,
    DmDiferencia2ProporcionesComponent,
    DmProporcionComponent,
    DmRazon2VarianzasComponent,
    DmVarianzaComponent
  ],
  imports: [
    CommonModule,
    FormularioRoutingModule,
    SharedModule
  ]
})
export class FormularioModule { }
