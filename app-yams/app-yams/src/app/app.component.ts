import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('colorChange', [
      state('active', style({
        color: 'red'
      })),
      state('inactive', style({
        color: 'black'
      })),
      transition('active <=> inactive', [
        animate('0.5s')
      ])
    ])
  ]
})

export class AppComponent implements OnInit {
  isLoggedIn: boolean = false;
  currentStates: { [key: string]: string } = {
    connecter: 'inactive',
    home: 'inactive',
    deconnecter: 'inactive'
  };

  constructor(public authService: AuthService) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn(); 
    this.authService.authChanged.subscribe((isAuthenticated: boolean) => {
      this.isLoggedIn = isAuthenticated; 
    });
  }

  logout(): void {
    this.authService.logout();
  }

  toggleState(item: string): void {
    if (this.currentStates.hasOwnProperty(item)) {
      this.currentStates[item] = this.currentStates[item] === 'active' ? 'inactive' : 'active';
    }
  }
}
