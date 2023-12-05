import { Component, OnInit } from '@angular/core';
import { PastrieService } from '../pastrie.service'
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
  choicePastries: [] = [];
  maxSelections = 3; // Nombre maximal de pâtisseries à sélectionner
  buttonDisabled = false; // Indicateur pour désactiver le bouton après la sélection
  searchResults: Pastrie[] = [];
  pastries: Pastrie[] = [];
  currentPage = 1;
  perPage = 5;
  paginatedPastries: any[] = [];

  constructor(private pastrieService: PastrieService) {
    this.pastries = pastrieService.getPastries()
  }


  ngOnInit(): void { 
    this.loadPastries();
  }

  onSelect(pastrie: Pastrie) {
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
  loadPastries(): void {
    this.pastries = this.pastrieService.getPastries();
    this.paginate(this.currentPage);
  }

  paginate(page: number): void {
    this.paginatedPastries = this.pastrieService.paginate(page, this.perPage); // Utiliser le service pour paginer les données
  }

  handlePageChange(page: number): void {
    this.paginate(page);
  }
  handleSearchResults(results: Pastrie[]) {
    this.searchResults = results;
  }
  displayPastries(): Pastrie[] {
    return this.searchResults.length > 0 ? this.searchResults : this.pastries;
  }
}