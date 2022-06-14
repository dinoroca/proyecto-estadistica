import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DistMuestralesRoutingModule } from './dist-muestrales-routing.module';
import { MaPobParamsComponent } from './ma-pob-params/ma-pob-params.component';
import { MaTiposMuestraComponent } from './ma-tipos-muestra/ma-tipos-muestra.component';
import { MaEstadisticasComponent } from './ma-estadisticas/ma-estadisticas.component';
import { DmMediaComponent } from './dm-media/dm-media.component';
import { DmProporcionComponent } from './dm-proporcion/dm-proporcion.component';
import { DmVarianzaComponent } from './dm-varianza/dm-varianza.component';
import { DmDifDosMediasComponent } from './dm-dif-dos-medias/dm-dif-dos-medias.component';
import { DmDifDosProporcionesComponent } from './dm-dif-dos-proporciones/dm-dif-dos-proporciones.component';
import { DmDifDosVarianzasComponent } from './dm-dif-dos-varianzas/dm-dif-dos-varianzas.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    MaPobParamsComponent,
    MaTiposMuestraComponent,
    MaEstadisticasComponent,
    DmMediaComponent,
    DmProporcionComponent,
    DmVarianzaComponent,
    DmDifDosMediasComponent,
    DmDifDosProporcionesComponent,
    DmDifDosVarianzasComponent
  ],
  imports: [
    CommonModule,
    DistMuestralesRoutingModule,
    SharedModule
  ]
})
export class DistMuestralesModule { }
