import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablasComponent } from './tablas/dist-media.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: TablasComponent },
      { path: '**', redirectTo: '' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalculadoraRoutingModule { }
