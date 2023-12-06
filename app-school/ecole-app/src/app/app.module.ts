import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importez FormsModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EtudiantsComponent } from './etudiants/etudiants.component';
import { AjouterEtudiantComponent } from './ajouter-etudiant/ajouter-etudiant.component';

@NgModule({
  declarations: [
    AppComponent,
    EtudiantsComponent,
    AjouterEtudiantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule // Ajoutez FormsModule ici
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }