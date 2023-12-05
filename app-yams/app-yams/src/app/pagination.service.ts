import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {
  constructor() {}

  paginate(data: any[], page: number, perPage: number): any[] {
    // Logique de pagination
    const start = (page - 1) * perPage;
    const end = start + perPage;
    return data.slice(start, end);
  }
}