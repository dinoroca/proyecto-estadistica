import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TlcBimomialNormalComponent } from './tlc-bimomial-normal/tlc-bimomial-normal.component';
import { TlcChicuadNormalComponent } from './tlc-chicuad-normal/tlc-chicuad-normal.component';
import { TlcHiperNormalComponent } from './tlc-hiper-normal/tlc-hiper-normal.component';
import { TlcPoissonNormalComponent } from './tlc-poisson-normal/tlc-poisson-normal.component';
import { VacChicuadComponent } from './vac-chicuad/vac-chicuad.component';
import { VacExponencialComponent } from './vac-exponencial/vac-exponencial.component';
import { VacFComponent } from './vac-f/vac-f.component';
import { VacGammaComponent } from './vac-gamma/vac-gamma.component';
import { VacNormalComponent } from './vac-normal/vac-normal.component';
import { VacTstudentComponent } from './vac-tstudent/vac-tstudent.component';
import { VadBernoulliComponent } from './vad-bernoulli/vad-bernoulli.component';
import { VadBinomialComponent } from './vad-binomial/vad-binomial.component';
import { VadGeometricaComponent } from './vad-geometrica/vad-geometrica.component';
import { VadHipergeoComponent } from './vad-hipergeo/vad-hipergeo.component';
import { VadPascalComponent } from './vad-pascal/vad-pascal.component';
import { VadPoissonComponent } from './vad-poisson/vad-poisson.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'vad-bernoulli', component: VadBernoulliComponent},
      {path: 'vad-binomial', component: VadBinomialComponent},
      {path: 'vad-geometrica', component: VadGeometricaComponent},
      {path: 'vad-pascal', component: VadPascalComponent},
      {path: 'vad-hipergeometrica', component: VadHipergeoComponent},
      {path: 'vad-poisson', component: VadPoissonComponent},

      {path: 'vac-normal', component: VacNormalComponent},
      {path: 'vac-gamma', component: VacGammaComponent},
      {path: 'vac-exponencial', component: VacExponencialComponent},
      {path: 'vac-chicuadrado', component: VacChicuadComponent},
      {path: 'vac-tstudent', component: VacTstudentComponent},
      {path: 'vac-f', component: VacFComponent},

      {path: 'tlc-binomial-normal', component: TlcBimomialNormalComponent},
      {path: 'tlc-hipergeometrica-normal', component: TlcHiperNormalComponent},
      {path: 'tlc-poisson-normal', component: TlcPoissonNormalComponent},
      {path: 'tlc-chicuadrado-normal', component: TlcChicuadNormalComponent},
      { path: '**', redirectTo: 'vad-bernoulli' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DistImportantesRoutingModule { }
