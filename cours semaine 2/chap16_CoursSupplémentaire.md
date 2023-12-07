# Cours Supplémentaire Système d'Authentification Angular avec AuthService et GuardService

## Introduction 

Dans les applications Angular, la mise en place d'un système d'authentification sécurisé est essentielle. Cela implique souvent la création de services pour gérer l'authentification (AuthService) et la protection des routes (GuardService).

## Création de Auth Service

**AuthService** est responsable de la gestion des fonctionnalités liées à l'authentification, telles que la connexion, la déconnexion, et la vérification de l'état de connexion de l'utilisateur.

## Mise en place du Auth Service

### Création du service 

```bash
ng generate service auth
```

### Méthodes de base

Implémentez des méthodes pour la connexion, la déconnexion et la vérification du statut de connexion.

```ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private Auth: boolean = false;

  auth(username: string, password: string): boolean {
    // Implémentez la logique de connexion
    this.Auth = true;
    return this.Auth;
  }

  logout(): void {
    this.Auth = false;
  }

  isAuth(): boolean {
    return this.Auth;
  }
}

```

## Mise en Place du GuardService

### Création du Guard 

```bash
ng generate guard auth
```

### Implémentez CanActivate 

Implémentez l'interface **CanActivate** pour protéger les routes.

```ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (!this.authService.isAuth()) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
```

## Intégration dans le Module de Routage

Protégez les routes en ajoutant le guard comme un **canActivate** dans votre configuration de routage.

```ts
const routes: Routes = [
  { path: 'protected', component: ProtectedComponent, canActivate: [AuthGuard] },
  // autres routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```


