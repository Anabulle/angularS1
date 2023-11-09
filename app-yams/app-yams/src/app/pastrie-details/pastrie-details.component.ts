import { Component, OnInit, Input } from '@angular/core';
import { Pastrie, List } from '../pastrie';
import { INGREDIENTS_LISTS } from '../mock-pastries';
import { query } from '@angular/animations';

@Component({
  selector: 'app-pastrie-details',
  templateUrl: './pastrie-details.component.html',
  styleUrls: ['./pastrie-details.component.scss']
})
export class PastrieDetailsComponent implements OnInit {

  // Classe Input permet de récupérer les data de l'enfant
  // pastrie est liée à une entrée [pastrie] du parent dans le sélecteur
  @Input() pastrie: Pastrie | null = null;
  ingredientsLists: string[]| null = null;


  constructor() { }

  ngOnInit() {
    console.log(this.pastrie); // pour l'instant c'est undefined ... C'est normal
  }
  ngOnChanges() {
    INGREDIENTS_LISTS.forEach(ingredient => {
      if (this.pastrie?.id === ingredient.id) {
        this.ingredientsLists = ingredient.list
      }
    })
  }
  onDisplay() {
    const element = document.querySelector(".desc");
    if (element) {
      element.classList.toggle("d-none");
    }
  }
}
