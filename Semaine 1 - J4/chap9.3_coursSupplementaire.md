# Directives d'attributs en Angular

Les directives d'attributs sont un concept puissant en Angular, qui vous permettent de modifier l'apparence ou le comportement d'un élément du DOM (Document Object Model). Contrairement aux autres types de directives, telles que les directives structurelles qui changent la structure du DOM en ajoutant ou en supprimant des éléments, les directives d'attributs modifient les attributs existants ou ajoutent de nouveaux attributs aux éléments du DOM.

## Exemple d'Utilisation

Imaginons que vous souhaitiez changer la couleur de fond d'un bouton lorsqu'un utilisateur passe sa souris dessus. Vous pouvez créer une directive d'attribut personnalisée pour cela.

### Création de la directive

```typescript
import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]' // Le sélecteur est ce qui permet d'utiliser la directive dans le HTML.
})
export class HighlightDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow'); // Changer la couleur en jaune au survol de la souris.
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null); // Revenir à la couleur initiale lorsque la souris quitte le bouton.
  }

  private highlight(color: string | null) {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
  }
}
```

### Utilisation de la directive dans un Composant

```html
<p [appHighlight]="'red'">Ce texte sera en rouge.</p>
```
