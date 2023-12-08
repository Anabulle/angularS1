import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginate',
  templateUrl: './paginate.component.html',
  styleUrls: ['./paginate.component.css']
})
export class PaginateComponent implements OnInit {
  @Input() data: any[] = [];
  @Input() perPage = 5;
  @Output() pageChange = new EventEmitter<number>();

  currentPage = 1;
  paginatedData: any[] = [];
  totalPages: number[] = [];

  ngOnInit(): void {
    this.paginate();
    this.generatePageNumbers();
  }

  paginate(): void {
    const startIndex = (this.currentPage - 1) * this.perPage;
    const endIndex = startIndex + this.perPage;
    this.paginatedData = this.data.slice(startIndex, endIndex);
  }

  next(): void {
    if (this.currentPage < this.getTotalPages()) {
      this.currentPage++;
      this.paginate();
      this.pageChange.emit(this.currentPage);
    }
  }

  previous(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.paginate();
      this.pageChange.emit(this.currentPage);
    }
  }

  getTotalPages(): number {
    return Math.ceil(this.data.length / this.perPage);
  }

  generatePageNumbers(): void {
    const total = this.getTotalPages();
    this.totalPages = Array.from({ length: total }, (_, index) => index + 1);
    if (this.totalPages.length === 0) {
      this.totalPages.push(1); // Ajouter la page 1 si aucune page n'existe
    }
  
    // Vérifier si la page actuelle est supérieure au nombre total de pages
    if (this.currentPage > total) {
      this.goToPage(total); // Définir la page actuelle comme dernière page si elle est supérieure
    }
  }

  goToPage(pageNumber: number): void {
    if (pageNumber >= 1 && pageNumber <= this.getTotalPages()) {
      this.currentPage = pageNumber;
      this.paginate();
    }
  }
  
}
