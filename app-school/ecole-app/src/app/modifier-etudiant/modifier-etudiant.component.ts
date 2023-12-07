import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Etudiant } from '../etudiant.model';
import { EtudiantService } from '../etudiant.service';

@Component({
  selector: 'app-modifier-etudiant',
  templateUrl: './modifier-etudiant.component.html',
  styleUrls: ['./modifier-etudiant.component.css']
})
export class ModifierEtudiantComponent implements OnInit {
  etudiant: Etudiant = { nom: '', prenom: '', classe: '' };

  constructor(private route: ActivatedRoute, private etudiantService: EtudiantService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
  
    if (id) {
      this.etudiantService.getEtudiantById(id).subscribe(
        (data: Etudiant) => {
          this.etudiant = data;
        },
        (error) => {
          console.error('Erreur lors de la récupération des détails de l\'étudiant', error);
        }
      );
    } else {
      console.error('Aucun identifiant d\'étudiant trouvé dans l\'URL.');
    }
  }

  modifierEtudiant(): void {
    // Mettre à jour l'étudiant en utilisant le service
    this.etudiantService.updateEtudiant(this.etudiant).subscribe(
      (response: Etudiant) => {
        console.log('Étudiant modifié avec succès', response);
        // Redirection ou autres actions après la modification
      },
      (error) => {
        console.error('Erreur lors de la modification de l\'étudiant', error);
      }
    );
  }
}

