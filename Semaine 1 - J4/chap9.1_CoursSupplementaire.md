# Communication entre composants Angular : @Input et @Output

Dans Angular, les composants sont les éléments fondamentaux de l'architecture d'une application. Pour construire une application modulaire et réutilisable, Angular utilise une hiérarchie de composants. La communication entre ces composants est essentielle et se fait principalement via `@Input` et `@Output`.

## @Input

La décoration `@Input` permet à un composant enfant de recevoir des valeurs d'un composant parent.

### Utilisation de @Input

Pour utiliser `@Input`, vous devez d'abord importer `Input` depuis `@angular/core`.

```typescript
import { Component, Input } from '@angular/core';
```

Puis, vous déclarez une propriété dans le composant enfant avec le décorateur @Input comme suit :

```typescript
@Component({
  selector: 'app-enfant',
  template: '<p>{{ dataParent }}</p>',
})
export class EnfantComponent {
  @Input() dataParent: any;
}
```

Dans le composant parent, vous pouvez lier une valeur à cette propriété en utilisant la syntaxe de liaison de propriété :

```html
<app-enfant [dataParent]="valeur"></app-enfant>
```

### Exemple concret

Imaginons un composant parent qui gère une liste d'utilisateurs et un composant enfant qui affiche les informations d'un utilisateur.

```typescript
// Dans le parent.component.ts
@Component({
  selector: 'app-parent',
  template: `
    <app-enfant [utilisateur]="user" *ngFor="let user of userList"></app-enfant>
  `,
})
export class ParentComponent {
  userList = [{name: 'Alice'}, {name: 'Bob'}];
}

// Dans le enfant.component.ts
@Component({
  selector: 'app-enfant',
  template: '<p>Nom de l\'utilisateur: {{ utilisateur.name }}</p>',
})
export class EnfantComponent {
  @Input() utilisateur: {name: string};
}
```
## Output

Le décorateur @Output permet à un composant enfant d'émettre des événements vers le composant parent.

## Utilisation de @Output

Tout comme @Input, vous commencez par importer Output et EventEmitter.

```typescript
import { Component, Output, EventEmitter } from '@angular/core';
```
Vous déclarez ensuite un EventEmitter avec le décorateur @Output.

```typescript
@Component({
  selector: 'app-enfant',
  template: '<button (click)="envoyer()">Envoyer</button>',
})
export class EnfantComponent {
  @Output() changement = new EventEmitter<any>();

  envoyer() {
    this.changement.emit({ data: 'Quelque chose' });
  }
}
```
Dans le composant parent, vous écoutez cet événement :
```html
<app-enfant (changement)="traiterChangement($event)"></app-enfant>
```
Et vous définissez la fonction pour traiter l'événement :

```typescript
@Component({
  selector: 'app-parent',
  template: `
    <app-enfant (changement)="traiterChangement($event)"></app-enfant>
  `,
})
export class ParentComponent {
  traiterChangement(evenement) {
    console.log('Événement reçu :', evenement);
  }
}
```

## Exemple concret

Prenons l'exemple d'un composant enfant qui permet à l'utilisateur de s'abonner à une newsletter.

```typescript
// enfant.component.ts
@Component({
  selector: 'app-enfant',
  template: '<button (click)="souscrire()">S\'abonner</button>',
})
export class EnfantComponent {
  @Output() nouvelleInscription = new EventEmitter<string>();

  souscrire() {
    this.nouvelleInscription.emit('Un utilisateur s\'est abonné!');
  }
}

// parent.component.ts
@Component({
  selector: 'app-parent',
  template: '<app-enfant (nouvelleInscription)="afficherAlerte($event)"></app-enfant>',
})
export class ParentComponent {
  afficherAlerte(message: string) {
    alert(message);
  }
}
```
Dans cet exemple, lorsque l'utilisateur clique sur le bouton dans EnfantComponent, le ParentComponent est notifié et peut réagir en conséquence.


