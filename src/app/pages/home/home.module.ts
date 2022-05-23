import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MediasComponent } from './medias/medias.component';
import { ProporcionComponent } from './proporcion/proporcion.component';
import { VarianzaComponent } from './varianza/varianza.component';


@NgModule({
  declarations: [
    MediasComponent,
    ProporcionComponent,
    VarianzaComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
