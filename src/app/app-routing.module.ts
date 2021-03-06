import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomeModule )
  },

  {
    path: 'inferencia',
    loadChildren: () => import('./pages/inferencia/dist-importantes/dist-importantes.module').then( m => m.DistImportantesModule )
  },

  {
    path: 'inferencia-ma',
    loadChildren: () => import('./pages/inferencia/dist-muestrales/dist-muestrales.module').then( m => m.DistMuestralesModule )
  },

  {
    path: 'tablas',
    loadChildren: () => import('./pages/tablas/tablas.module').then( m => m.CalculadoraModule )
  },

  {
    path: 'formulario',
    loadChildren: () => import('./pages/formulario/formulario.module').then( m => m.FormularioModule )
  },

  {
    path: '**', redirectTo: 'inicio'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes ,{
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
