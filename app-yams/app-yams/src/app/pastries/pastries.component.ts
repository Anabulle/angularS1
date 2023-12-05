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
  perPage = 5;
  currentPage = 1;
  paginatedPastries: Pastrie[] = [];
  allPastries: Pastrie[] = [];
  selectedPastrie: Pastrie | null = null;

  constructor(
    private pastrieService: PastrieService,
    private paginationService: PaginationService
  ) {}

  ngOnInit(): void {
    this.loadPastries();
  }

  loadPastries(): void {
    this.allPastries = this.pastrieService.getPastries();
    this.paginate(this.currentPage);
  }

  paginate(page: number): void {
    // Utilisez votre service de pagination pour obtenir les données paginées
    this.paginatedPastries = this.paginationService.paginate(this.allPastries, page, this.perPage);
  }

  next(): void {
    if (this.currentPage < Math.ceil(this.allPastries.length / this.perPage)) {
      this.currentPage++;
      this.paginate(this.currentPage);
    }
  }

  previous(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.paginate(this.currentPage);
    }
  }

  onSelect(pastrie: Pastrie): void {
    // Logique pour sélectionner une pâtisserie
  }

  changeParentPreference(pastrieId: string): void {
    // Logique pour changer la préférence parent
  }

  handleSearchResults(results: Pastrie[]): void {
    // Logique pour gérer les résultats de recherche
  }

  displayPastries(): Pastrie[] {
    return this.paginatedPastries;
  }
}