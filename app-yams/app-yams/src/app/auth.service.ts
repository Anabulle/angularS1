import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;
  public authChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  login(username: string, password: string): boolean {
    if (username === 'Toto' && password === 'Tutu') {
      this.isAuthenticated = true;
      this.authChanged.emit(true); // Émet un événement pour indiquer un changement d'authentification
    } else {
      this.isAuthenticated = false;
      this.authChanged.emit(false); // Émet un événement pour indiquer un changement d'authentification
    }
    return this.isAuthenticated;
  }

  logout(): void {
    this.isAuthenticated = false;
    this.authChanged.emit(false); // Émet un événement pour indiquer un changement d'authentification
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}

