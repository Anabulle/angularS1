import { Component } from '@angular/core';
import { Etudiant } from '../etudiant.model';
import { EtudiantService } from '../etudiant.service';

@Component({
  selector: 'app-ajouter-etudiant',
  templateUrl: './ajouter-etudiant.component.html',
  styleUrls: ['./ajouter-etudiant.component.css']
})
export class AjouterEtudiantComponent {
  nouvelEtudiant: Etudiant = new Etudiant('', '', '');

  constructor(private etudiantService: EtudiantService) { }

  ajouterEtudiant() {
    this.etudiantService.addEtudiant(this.nouvelEtudiant).subscribe(
      (response) => {
        console.log('Étudiant ajouté avec succès', response);
        // Réinitialiser les champs du formulaire ou effectuer d'autres actions nécessaires après l'ajout
        this.nouvelEtudiant = new Etudiant('', '', '');
      },
      (error) => {
        console.error('Erreur lors de l\'ajout de l\'étudiant', error);
        // Gérer les erreurs ici
      }
    );
  }
}
