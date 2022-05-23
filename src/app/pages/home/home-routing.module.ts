import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MediasComponent } from './medias/medias.component';
import { ProporcionComponent } from './proporcion/proporcion.component';
import { VarianzaComponent } from './varianza/varianza.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'home-medias', component: MediasComponent },
      { path: 'home-proporcion', component: ProporcionComponent },
      { path: 'home-varianza', component: VarianzaComponent },
      { path: '**', redirectTo: 'home-medias' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
