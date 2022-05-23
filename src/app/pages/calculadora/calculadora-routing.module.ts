import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DistMediaComponent } from './dist-media/dist-media.component';
import { DistProporcionComponent } from './dist-proporcion/dist-proporcion.component';
import { DistVarianzaComponent } from './dist-varianza/dist-varianza.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'dist-media', component: DistMediaComponent },
      { path: 'dist-proporcion', component: DistProporcionComponent },
      { path: 'dist-varianza', component: DistVarianzaComponent },
      { path: '**', redirectTo: 'dist-media' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalculadoraRoutingModule { }
