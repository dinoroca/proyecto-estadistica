import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DmDiferencia2MediasComponent } from './dm-diferencia2-medias/dm-diferencia2-medias.component';
import { DmDiferencia2ProporcionesComponent } from './dm-diferencia2-proporciones/dm-diferencia2-proporciones.component';
import { DmMediaComponent } from './dm-media/dm-media.component';
import { DmProporcionComponent } from './dm-proporcion/dm-proporcion.component';
import { DmRazon2VarianzasComponent } from './dm-razon2-varianzas/dm-razon2-varianzas.component';
import { DmVarianzaComponent } from './dm-varianza/dm-varianza.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'dm-media', component: DmMediaComponent },
      { path: 'dm-varianza', component: DmVarianzaComponent },
      { path: 'dm-proporcion', component: DmProporcionComponent },
      { path: 'dm-dif-2-medias', component: DmDiferencia2MediasComponent },
      { path: 'dm-dif-2-proporciones', component: DmDiferencia2ProporcionesComponent },
      { path: 'dm-raz-2-varianzas', component: DmRazon2VarianzasComponent },
      { path: '**', redirectTo: 'dm-media' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormularioRoutingModule { }
