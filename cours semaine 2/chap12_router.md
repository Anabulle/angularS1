# Router

## Exercice 20 Mise en place du router

Nous allons créer 2 routes : une pour la page principale, et une pour la page de connexion au backoffice que nous verrons plus tard.

### Configuration des routes

Pour créer nos routes nous allons le faire dans l’AppModule pour l’instant, plus
tard nous factoriserons ce code dans un module spécifique.

Voyez le code ci-dessous dans le fichier app.modules.ts :

```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PastriesComponent } from './pastries/pastries.component';
import { PastrieDetailsComponent } from './pastrie-details/pastrie-details.component';

// définission de la constante pour les routes
const pastriesRoutes: Routes = [];

@NgModule({
    declarations: [
        AppComponent,
        PastriesComponent,
        PastrieDetailsComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(pastriesRoutes), // chargement des routes dans l'application
],
providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

Définissez les routes suivantes :

```ts
const pastriessRoutes: Routes = [
    {
        path: 'pastries',
        component: PastriesComponent
    },
    {
        path: '',
        redirectTo: '/pastries',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
];
```

Dans la navigation principale écrivez maintenant :

```html
<ul class="navbar-nav mr-auto">
    <li class="nav-item active">
        <a class="nav-link" routerLink="/login" routerLinkActive="active">
            Se connecter
        </a>
    </li>
</ul>
```

Pour le lien (ou route) menant vers la page principale affichant toutes les pâtisseries,
notez que dans la constante pastriesRoute nous avons fait une redirection vers le
component affichant les pâtisseries pour cette route, c’est la directive routerLink
qui permet de faire la relation entre la route et la définition de celle-ci dans la
constante pastriesRoute.
