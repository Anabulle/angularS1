import { Component, OnInit } from '@angular/core';

// Importez la définition de la classe et les pâtisseries
import { Pastrie } from '../pastrie';
import { PASTRIES } from '../mock-pastries';

@Component({
  selector: 'app-pastries',
  templateUrl: './pastries.component.html',
  styleUrls: ['./pastries.component.scss']
})

export class PastriesComponent implements OnInit {
  selectedPastrie: Pastrie | null = null;
  titlePage: string = "Page principale : liste des pâtisseries à gagner";
  pastries: Pastrie[] = PASTRIES;
  choicePastries = [] ;
  maxSelections = 3; // Nombre maximal de pâtisseries à sélectionner
  buttonDisabled = false; // Indicateur pour désactiver le bouton après la sélection

  constructor() { }

  ngOnInit() {
  }
  OnSelect(pastrie: Pastrie) {
    console.log(pastrie);
    this.selectedPastrie = pastrie;
  }
  changeParentPreference(pastrieId: string) {
    // Réagir à l'événement ici en utilisant l'ID de la pâtisserie
    console.log(`ID de la pâtisserie sélectionnée : ${pastrieId}`);
    
  const selectPastrie = this.pastries.find(pastrie => pastrie.id === pastrieId);

  if (!selectPastrie) {
    return; 
  }

  }
}