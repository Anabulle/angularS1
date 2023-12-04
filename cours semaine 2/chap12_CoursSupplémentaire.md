# Cours Supplémentaire Routage Angular

## Introduction au Routage Angular

Le routage Angular est un mécanisme clé qui permet de naviguer entre différentes vues ou composants dans une application Angular. Il utilise le concept de routes pour associer des URLs à des composants, offrant ainsi une expérience de navigation similaire à celle d'un site web traditionnel.

## Principe de Base du Routage

### Configuration des Routes

Les routes sont définies dans un module de routage (AppRoutingModule dans la plupart des cas) en utilisant la méthode 
```ts 
RouterModule.forRoot(routes).
```
### Objet Route

Chaque route est un objet avec au moins deux propriétés : path (chemin de l'URL) et component (le composant Angular à afficher).

### Navigation

Angular change le composant affiché en fonction de l'URL sans recharger la page complète.

## Configuration des Routes

### Importation de RouterModule

```ts
import { RouterModule, Routes } from '@angular/router';
```

### Définition des Routes

```typescript

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent }
];
```

### Ajout du Routage au Module

```typescript
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

## Exemple Simple de Mise en Place

### Création des Composants

Utilisez la commande CLI Angular pour générer deux composants, par exemple HomeComponent et AboutComponent.

### Configuration des Routes
Configurez les routes comme indiqué précédemment dans le AppRoutingModule.

### Utilisation des Liens de Navigation
Dans le template HTML de votre composant, utilisez la directive routerLink pour créer des liens de navigation.

```html
<a routerLink="/home">Home</a>
<a routerLink="/about">About</a>
```

### Affichage du Composant Routé

Ajoutez la balise <router-outlet></router-outlet> dans le template HTML de votre composant principal (AppComponent). Cette balise agit comme un placeholder où le composant correspondant à l'URL actuelle sera rendu.