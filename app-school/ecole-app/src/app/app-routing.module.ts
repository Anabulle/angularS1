import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModifierEtudiantComponent } from './modifier-etudiant/modifier-etudiant.component';
import { EtudiantsComponent } from './etudiants/etudiants.component';

const routes: Routes = [
  { path: '', component: EtudiantsComponent }, 
  { path: 'modifier-etudiant/:id', component: ModifierEtudiantComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
