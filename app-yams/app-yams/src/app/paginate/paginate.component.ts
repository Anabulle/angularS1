import { Component, OnInit, Input } from '@angular/core';
import { PaginationService } from '../pagination.service';

@Component({
  selector: 'app-paginate',
  templateUrl: './paginate.component.html',
  styleUrls: ['./paginate.component.css']
})
export class PaginateComponent implements OnInit {
  @Input() data: any[] = [];
  @Input() perPage = 5;

  currentPage = 1;
  paginatedData: any[] = [];

  constructor(private paginationService: PaginationService) {}

  ngOnInit(): void {
    this.paginate();
  }

  paginate(): void {
    this.paginatedData = this.paginationService.paginate(
      this.data,
      this.currentPage,
      this.perPage
    );
  }

  next(): void {
    if (this.currentPage < this.getTotalPages()) {
      this.currentPage++;
      this.paginate();
    }
  }

  previous(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.paginate();
    }
  }

  getTotalPages(): number {
    return Math.ceil(this.data.length / this.perPage);
  }
}