import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MediasComponent } from './medias/medias.component';
import { ProporcionComponent } from './proporcion/proporcion.component';
import { VarianzaComponent } from './varianza/varianza.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { KatexModule } from 'ng-katex';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MediasComponent,
    ProporcionComponent,
    VarianzaComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    KatexModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
