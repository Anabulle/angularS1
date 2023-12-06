import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Etudiant } from './etudiant.model';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  private apiUrl = '/api/etudiants';

  constructor(private http: HttpClient) { }
  
  getEtudiants(): Observable<Etudiant[]> {
    return this.http.get<Etudiant[]>(this.apiUrl);
  }

  deleteEtudiant(etudiantId: string): Observable<any> {
    const url = `${this.apiUrl}/${etudiantId}`;
    return this.http.delete<any>(url);
  }

  updateEtudiant(etudiant: Etudiant): Observable<Etudiant> {
    const url = `${this.apiUrl}/${etudiant._id}`;
    return this.http.put<Etudiant>(url, etudiant);
  }

  addEtudiant(etudiant: Etudiant): Observable<Etudiant> {
    return this.http.post<Etudiant>(this.apiUrl, etudiant);
  }
}
