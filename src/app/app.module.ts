import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { KatexModule } from 'ng-katex';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    KatexModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
