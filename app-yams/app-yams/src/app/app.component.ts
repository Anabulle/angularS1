import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoggedIn: boolean = false;

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

}