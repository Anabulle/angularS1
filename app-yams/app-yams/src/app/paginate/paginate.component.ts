import { Component, OnInit } from '@angular/core';
import { PaginationService } from '../pagination.service';

@Component({
  selector: 'app-paginate',
  templateUrl: './paginate.component.html',
  styleUrls: ['./paginate.component.css']
})
export class PaginateComponent implements OnInit {
  currentPage = 1;
  perPage = 5; // Nombre de pâtisseries par page
  totalPastries = 0; // Nombre total de pâtisseries
  paginatedPastries: any[] = []; // Liste de pâtisseries paginées

  constructor(private paginationService: PaginationService) {}

  ngOnInit(): void {
    this.totalPastries = this.paginationService.pastries.length;
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
}
