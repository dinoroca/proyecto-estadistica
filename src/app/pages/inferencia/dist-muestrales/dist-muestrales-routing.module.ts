import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DmDifDosMediasComponent } from './dm-dif-dos-medias/dm-dif-dos-medias.component';
import { DmDifDosProporcionesComponent } from './dm-dif-dos-proporciones/dm-dif-dos-proporciones.component';
import { DmDifDosVarianzasComponent } from './dm-dif-dos-varianzas/dm-dif-dos-varianzas.component';
import { DmMediaComponent } from './dm-media/dm-media.component';
import { DmProporcionComponent } from './dm-proporcion/dm-proporcion.component';
import { DmVarianzaComponent } from './dm-varianza/dm-varianza.component';
import { MaEstadisticasComponent } from './ma-estadisticas/ma-estadisticas.component';
import { MaPobParamsComponent } from './ma-pob-params/ma-pob-params.component';
import { MaTiposMuestraComponent } from './ma-tipos-muestra/ma-tipos-muestra.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path : 'poblaciones-parametros', component: MaPobParamsComponent},
      { path : 'tipos-de-muestra', component: MaTiposMuestraComponent},
      { path : 'ma-estadisticas', component: MaEstadisticasComponent},
      { path : 'dm-media', component: DmMediaComponent},
      { path : 'dm-proporcion', component: DmProporcionComponent},
      { path : 'dm-varianza', component: DmVarianzaComponent},
      { path : 'dm-dos-medias', component: DmDifDosMediasComponent},
      { path : 'dm-dos-proporciones', component: DmDifDosProporcionesComponent},
      { path : 'dm-dos-varianzas', component: DmDifDosVarianzasComponent},
      { path: '**', redirectTo: 'poblaciones-parametros' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DistMuestralesRoutingModule { }
