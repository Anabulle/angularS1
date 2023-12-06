import { Component, OnInit } from '@angular/core';
import { EtudiantService } from '../etudiant.service';

@Component({
  selector: 'app-etudiants',
  templateUrl: './etudiants.component.html',
  styleUrls: ['./etudiants.component.sass']
})
export class EtudiantsComponent implements OnInit {
  etudiants: any = [];
 
  constructor(private etudiantService: EtudiantService) { }
 
  ngOnInit() {
    this.etudiantService.getEtudiants().subscribe(data => {
      this.etudiants = data;
    });
  }

  supprimerEtudiant(etudiantId: string) {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet étudiant ?')) {
      this.etudiantService.deleteEtudiant(etudiantId).subscribe(() => {
        // Actualiser la liste des étudiants après la suppression
        this.actualiserListeEtudiants();
      }, error => {
        console.error('Erreur lors de la suppression de l\'étudiant : ', error);
        // Gérer l'erreur ici
      });
    }
  }

  actualiserListeEtudiants() {
    this.etudiantService.getEtudiants().subscribe(data => {
      this.etudiants = data;
    });
  }
}
