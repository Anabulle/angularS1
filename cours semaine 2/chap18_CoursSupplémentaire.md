# Cours Supplémentaire Animations Angular

## Présentation des Animations

**Qu'est-ce qu'une Animation?**

Les animations sont des changements visuels apportés à des éléments de l'interface utilisateur au fil du temps, créant une expérience interactive et dynamique.

Elles peuvent impliquer des modifications de propriétés telles que la taille, la couleur, la position, l'opacité, etc.

**Importance des Animations**

Améliorent l'expérience utilisateur en rendant les interactions plus naturelles et intuitives.

Aident à attirer l'attention sur des éléments importants et à guider les utilisateurs à travers les flux d'interface utilisateur.

Peuvent être utilisées pour des retours visuels, des transitions d'écran, et pour ajouter un élément de plaisir.

## Animations dans Angular avec @angular/animations

Angular fournit un puissant framework d'animations intégré, `@angular/animations`, pour ajouter des animations complexes avec peu de code.

Il permet de définir des animations dans le code TypeScript, offrant un contrôle détaillé et une intégration étroite avec les autres fonctionnalités d'Angular.

Pour utiliser @angular/animations, vous devez installer le package et configurer votre module :

```ts
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserAnimationsModule, // Active les fonctionnalités d'animation dans l'application
    // autres imports
  ],
})
export class AppModule { }
```

## Créer des Animations de Base dans Angular

Utilisez trigger(), state(), style(), animate(), et transition() pour définir des animations.

Définissez ces animations dans le décorateur @Component de votre composant.

Exemple d'Animation Simple :

```ts
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'mon-component',
  templateUrl: './mon-component.component.html',
  animations: [
    trigger('openClose', [
      state('open', style({ height: '*' })),
      state('closed', style({ height: '0px', opacity: 0 })),
      transition('open <=> closed', [animate('0.5s')])
    ])
  ]
})
export class MonComponent {
  isOpen = true;
}
```

Dans cet exemple, openClose est une animation qui change la hauteur et l'opacité d'un élément. Les transitions entre les états open et closed sont animées sur une durée de 0.5 seconde.

Utilisation dans le HTML :

```html
<div [@openClose]="isOpen ? 'open' : 'closed'">
  Ceci est un contenu qui s'ouvre et se ferme.
</div>
```

Ici, l'animation openClose est appliquée à un div, et l'état de l'animation est contrôlé par la propriété isOpen du composant.




