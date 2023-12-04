# Exerices de révision - Semaine 1 Angular

## Exercice : Création d'une bilbiothèque en ligne

Objectif : Développer une application Angular pour gérer une biliothèque en ligne.

### 1) Communication Enfants/Parents

#### Composant Parent (App Component)

- Créez un tableau `books` dans un service `BookService`, qui contiendra des objets `livre` (`id`, `titre`, `auteur`, `année`)
- Affichez la liste de livres à l'aide de la boucle `*ngfor` au sein de votre App Component

#### Composant Parent (App Component)

- Créez un compçosant pour afficher un livre à l'aide le l'attribut `@Input()` pour recevoir les données du livre du composant parent.
- Ajoutez un bouton pour supprimer le livre, ce qui enverra un événemnt au composant parent.

#### Interaction : 

- Depuis le composant parent, passez les données du livre au composant enfant.
- Gérez l'ajout et la suppression des livres dans le composant parent.

### 2) Directives

#### Directive Personnalisée :

- Créez une directive qui change la couleur du texte d'un livre en fonction de son année de publication (utilisez `Renderer2` pour cela).
- Appliquez cette directive dans le composant enfant pour chaque livre.

### 3) Services

#### Service de Livres(`BookService`)

- Implémentez des méthodes pour ajouter, supprimer et récupérer des livres.
- Injectez ce service dans les composants pour accéder et modifier la liste des livres.

### 4) Formulaires

#### Formulaire d'ajout de livre : 

- Utilisez `Angular Reactive Forms` pour créer un formulaire d'ajout de livre.
- Le formulaire doit comprendre des champs pour le titre, l'auteur, et l'année, avec des validations appropriées (par exemple, tous les champs sont requis, l'année doit être une valeur numérique valide).
- À la soumission du formulaire, utilisez le service `BookService` pour ajouter le livre à la liste et mettez à jour l'affichage dans le composant parent.


## Elements de correction Exercice : Création d'une bilbiothèque en ligne

```typescript
// Composant Parent `app.component.ts`

import { Book } from './book.model';
import { Component } from '@angular/core';
import { BookService } from './book.service';

@Component({
  selector: 'app-root',
  template: `
    <div *ngFor="let book of bookService.books$ | async">
      <app-book [book]="book" (delete)="deleteBook(book.id)"></app-book>
    </div>
    <button (click)="addBook()">Add Book</button>
    <app-add-book *ngIf="showAddBookForm" (bookAdded)="onBookAdded($event)"></app-add-book>
  `
})
export class AppComponent {
  showAddBookForm = false;

  constructor(public bookService: BookService) {}

  deleteBook(bookId: number) {
    this.bookService.deleteBook(bookId);
  }

  addBook() {
    this.showAddBookForm = true;
  }

  onBookAdded(book: Book) {
    this.bookService.addBook(book);
    this.showAddBookForm = false;
  }
}
```

```typescript
// Composant Enfant `Book.component.ts`

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from './book.model';

@Component({
  selector: 'app-book',
  template: `
    <div [appHighlight]="book.year">
      <p>Title: {{ book.title }}</p>
      <p>Author: {{ book.author }}</p>
      <button (click)="onDelete()">Delete</button>
    </div>
  `
})
export class BookComponent {
  @Input() book!: Book;
  @Output() delete = new EventEmitter<number>();

  onDelete() {
    this.delete.emit(this.book.id);
  }
}
```

```typescript
// Directive Highlight `highlight.directive.ts`

import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @Input('appHighlight') set highlightYear(year: number) {
    const color = year < 2000 ? 'blue' : 'green';
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
  }
}
```



```typescript
// Service de livres `Book.service.ts`

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book } from './book.model';

@Injectable({ providedIn: 'root' })
export class BookService {
  private booksSubject = new BehaviorSubject<Book[]>([]);
  books$ = this.booksSubject.asObservable();

  addBook(newBook: Book) {
    const currentBooks = this.booksSubject.value;
    this.booksSubject.next([...currentBooks, { ...newBook, id: this.generateId() }]);
  }

  deleteBook(bookId: number) {
    const updatedBooks = this.booksSubject.value.filter(book => book.id !== bookId);
    this.booksSubject.next(updatedBooks);
  }

  private generateId(): number {
    return Math.max(0, ...this.booksSubject.value.map(b => b.id)) + 1;
  }
}
```

```typescript
// Formulaire d'ajout de livre `add-book.component.ts`

import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BookService } from './book.service';
import { Book } from './book.model';

@Component({
  selector: 'app-add-book',
  template: `
    <form [formGroup]="addBookForm" (ngSubmit)="onSubmit()">
      <input formControlName="title" placeholder="Title" required>
      <input formControlName="author" placeholder="Author" required>
      <input formControlName="year" placeholder="Year" type="number" required>
      <button type="submit">Add Book</button>
    </form>
  `
})
export class AddBookComponent {
  @Output() bookAdded = new EventEmitter<Book>();

  addBookForm = this.fb.group({
    title: ['', Validators.required],
    author: ['', Validators.required],
    year: ['', [Validators.required, Validators.pattern('\\d+')]]
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    if (this.addBookForm.valid) {
      this.bookAdded.emit(this.addBookForm.value);
      this.addBookForm.reset();
    }
  }
}
```

```typescript
// Export de l'interface Book `book.model.ts`

export interface Book {
  id: number;
  title: string;
  author: string;
  year: number;
}
```