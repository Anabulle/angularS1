import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EtudiantsComponent } from './etudiants/etudiants.component';

@NgModule({
  declarations: [
    AppComponent,
    EtudiantsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule 
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
