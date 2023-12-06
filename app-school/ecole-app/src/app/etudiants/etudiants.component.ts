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
 }
