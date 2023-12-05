import { Component, OnInit } from '@angular/core';
import { PastrieService } from '../pastrie.service';
import { Pastrie } from '../pastrie';
import { PaginationService } from '../pagination.service';

@Component({
  selector: 'app-pastries',
  templateUrl: './pastries.component.html',
  styleUrls: ['./pastries.component.scss']
})
export class PastriesComponent implements OnInit {
  selectedPastrie: Pastrie | null = null;
  titlePage = "Page principale : liste des pâtisseries à gagner";
  paginatedPastries: Pastrie[] = [];
  currentPage = 1;
  perPage = 5; // Nombre de pâtisseries par page
  totalPastries = 0; // Nombre total de pâtisseries

  constructor(
    private pastrieService: PastrieService,
    private paginationService: PaginationService
  ) {}

  ngOnInit(): void {
    this.loadPastries();
  }

  loadPastries(): void {
    const allPastries = this.pastrieService.getPastries();
    this.totalPastries = allPastries.length;
    this.paginationService.setPastries(allPastries);
    this.paginate(this.currentPage);
  }

  paginate(page: number): void {
    this.paginatedPastries = this.paginationService.paginate(page, this.perPage);
  }

  next(): void {
    if (this.currentPage < Math.ceil(this.totalPastries / this.perPage)) {
      this.paginate(++this.currentPage);
    }
  }

  previous(): void {
    if (this.currentPage > 1) {
      this.paginate(--this.currentPage);
    }
  }

  onSelect(pastrie: Pastrie): void {
    this.selectedPastrie = pastrie;
  }

  changeParentPreference(pastrieId: string): void {
    console.log(`ID de la pâtisserie sélectionnée : ${pastrieId}`);
    const selectPastrie = this.paginatedPastries.find(pastrie => pastrie.id === pastrieId);
    if (!selectPastrie) {
      return;
    }
  }

  handleSearchResults(results: Pastrie[]): void {
    this.paginatedPastries = results;
    this.currentPage = 1; // Réinitialiser la page actuelle à 1 après une recherche
  }

  displayPastries(): Pastrie[] {
    return this.paginatedPastries;
  }
}