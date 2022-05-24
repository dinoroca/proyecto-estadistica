import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DistribucionesComponent } from './distribuciones/distribuciones.component';
import { InferenciaComponent } from './inferencia.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'inferencia', component: InferenciaComponent },
      { path: 'inferencia/distribuciones',component: DistribucionesComponent},
    

      { path: '**', redirectTo: 'inferencia'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InferenciaRoutingModule { }
