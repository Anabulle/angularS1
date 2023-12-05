import { Injectable } from '@angular/core';
import { Pastrie } from '../app/pastrie'; 

@Injectable({
  providedIn: 'root'
})
export class PaginationService {
  pastries: Pastrie[] = []; // Votre liste de pâtisseries

  setPastries(pastries: Pastrie[]): void {
    this.pastries = pastries;
  }

  paginate(page: number, perPage: number): Pastrie[] {
    const startIndex = (page - 1) * perPage;
    return this.pastries.slice(startIndex, startIndex + perPage);
  }
}