import { Component } from '@angular/core';
import { Etudiant } from '../etudiant.model';
import { EtudiantService } from '../etudiant.service';

@Component({
  selector: 'app-ajouter-etudiant',
  templateUrl: './ajouter-etudiant.component.html',
  styleUrls: ['./ajouter-etudiant.component.css']
})
export class AjouterEtudiantComponent {
  nouvelEtudiant: Etudiant = {
    nom: '',
    prenom: '',
    classe: ''
  };

  constructor(private etudiantService: EtudiantService) { }

  ajouterEtudiant() {
    this.etudiantService.addEtudiant(this.nouvelEtudiant).subscribe({
      next: (response: Etudiant) => {
        console.log('Étudiant ajouté avec succès', response);
        this.nouvelEtudiant = { nom: '', prenom: '', classe: '' }; 
      },
      error: (error: any) => {
        console.error('Erreur lors de l\'ajout de l\'étudiant', error);
      }
    });
  }
}
