import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DistImportantesRoutingModule } from './dist-importantes-routing.module';
import { VadBernoulliComponent } from './vad-bernoulli/vad-bernoulli.component';
import { VadBinomialComponent } from './vad-binomial/vad-binomial.component';
import { VadGeometricaComponent } from './vad-geometrica/vad-geometrica.component';
import { VadPascalComponent } from './vad-pascal/vad-pascal.component';
import { VadHipergeoComponent } from './vad-hipergeo/vad-hipergeo.component';
import { VadPoissonComponent } from './vad-poisson/vad-poisson.component';
import { VacNormalComponent } from './vac-normal/vac-normal.component';
import { VacGammaComponent } from './vac-gamma/vac-gamma.component';
import { VacExponencialComponent } from './vac-exponencial/vac-exponencial.component';
import { VacChicuadComponent } from './vac-chicuad/vac-chicuad.component';
import { VacTstudentComponent } from './vac-tstudent/vac-tstudent.component';
import { VacFComponent } from './vac-f/vac-f.component';
import { TlcBimomialNormalComponent } from './tlc-bimomial-normal/tlc-bimomial-normal.component';
import { TlcHiperNormalComponent } from './tlc-hiper-normal/tlc-hiper-normal.component';
import { TlcPoissonNormalComponent } from './tlc-poisson-normal/tlc-poisson-normal.component';
import { TlcChicuadNormalComponent } from './tlc-chicuad-normal/tlc-chicuad-normal.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    VadBernoulliComponent,
    VadBinomialComponent,
    VadGeometricaComponent,
    VadPascalComponent,
    VadHipergeoComponent,
    VadPoissonComponent,
    VacNormalComponent,
    VacGammaComponent,
    VacExponencialComponent,
    VacChicuadComponent,
    VacTstudentComponent,
    VacFComponent,
    TlcBimomialNormalComponent,
    TlcHiperNormalComponent,
    TlcPoissonNormalComponent,
    TlcChicuadNormalComponent
  ],
  imports: [
    CommonModule,
    DistImportantesRoutingModule,
    SharedModule
  ]
})
export class DistImportantesModule { }
