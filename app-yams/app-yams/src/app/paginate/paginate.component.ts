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

  ngOnInit(): void {
    this.paginate();
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
}