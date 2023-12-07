import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Etudiant } from '../etudiant.model';
import { EtudiantService } from '../etudiant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modifier-etudiant',
  templateUrl: './modifier-etudiant.component.html',
  styleUrls: ['./modifier-etudiant.component.css']
})
export class ModifierEtudiantComponent implements OnInit {
  etudiant: Etudiant = { _id: '', nom: '', prenom: '', classe: '' };

  constructor(private route: ActivatedRoute, private etudiantService: EtudiantService,   private router: Router ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.etudiantService.getEtudiantById(id).subscribe(
        (data: Etudiant) => {
          this.etudiant = data;
        },
        (error) => {
          console.error('Erreur', error);
        }
      );
    }
  }

  modifierEtudiant(): void {
    this.etudiantService.updateEtudiant(this.etudiant).subscribe(
      (response: Etudiant) => {
        console.log(this.etudiant, response);
        this.etudiant = response; 
        this.router.navigate(['/']); 
      },
      (error) => {
        console.error('Erreur lors de la modification de l\'étudiant', error);
      }
    );
  }
}

