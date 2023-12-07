import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModifierEtudiantComponent } from './modifier-etudiant/modifier-etudiant.component';
import { EtudiantsComponent } from './etudiants/etudiants.component';

const routes: Routes = [
  { path: '', component: EtudiantsComponent }, // Route par défaut pour afficher la liste des étudiants
  { path: 'modifier-etudiant/:id', component: ModifierEtudiantComponent },
  // ... Autres routes pour vos composants
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
