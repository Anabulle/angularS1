# Les Services dans Angular

## Qu'est-ce qu'un Service ?

Dans Angular, un **service** est une classe avec un objectif bien défini. Il est destiné à encapsuler les opérations commerciales, les appels aux API, les fonctions de partage de données, et toute autre logique métier loin des composants. Cela rend votre code plus modulaire, réutilisable et facile à gérer.

## Pourquoi Utiliser les Services ?

L'utilisation des services permet de :

- Séparer les préoccupations en isolant la logique métier des composants.
- Partager des données ou de la logique entre plusieurs composants.
- Améliorer la maintenabilité et la testabilité du code.

## Création et Utilisation d'un Service

Pour créer un service, vous utilisez le décorateur `@Injectable()` qui indique qu'une classe peut être injectée avec des dépendances.

```typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Permet de définir la portée du service. Ici, le service sera disponible dans toute l'application
})
export class DataService {
  private data: any = [];

  constructor() { }

  addData(item: any) {
    this.data.push(item);
  }

  getData(): any[] {
    return this.data;
  }
}
```

Une fois créé, un service peut être injecté dans les composants ou d'autres services via l'injection de dépendance.

```typescript
import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private dataService: DataService) {}

  addData(item: any) {
    this.dataService.addData(item);
  }

  getData() {
    return this.dataService.getData();
  }
}
```

## Bonnes Pratiques avec les Services

- Un service doit avoir un but unique, ce qui le rend efficace et gérable.
- Les services doivent être stateless si possible.
- Utilisez des services pour partager des données entre les composants non liés.

