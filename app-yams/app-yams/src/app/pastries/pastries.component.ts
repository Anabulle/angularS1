import { Component, OnInit } from '@angular/core';

// Importez la définition de la classe et les pâtisseries
import { Pastrie } from '../pastrie';
import { INGREDIENTS_LISTS, PASTRIES } from '../mock-pastries';
import { List } from '../pastrie';

@Component({
  selector: 'app-pastries',
  templateUrl: './pastries.component.html',
  styleUrls: ['./pastries.component.scss']
})

export class PastriesComponent implements OnInit {
  selectedPastrie: Pastrie = PASTRIES[1];
  titlePage: string = "Page principale : liste des pâtisseries à gagner";
  pastries: Pastrie[] = PASTRIES;

  constructor() { }

  ngOnInit() {
  }
  OnSelect(pastrie: Pastrie) {
    console.log(pastrie);
    this.selectedPastrie = pastrie;
  }
}