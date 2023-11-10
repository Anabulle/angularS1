import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PastrieService } from '../pastrie.service';
import { Pastrie } from '../pastrie';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  name: string = "";
  @Output() searchResultsEvent = new EventEmitter<Pastrie[]>();

  constructor(private pastrieService: PastrieService) {}

  onSubmit(form: NgForm): void {
    const keyword: string = form.value['word'];
    const searchResults = this.pastrieService.search(keyword);
    this.searchResultsEvent.emit(searchResults);
    console.log(searchResults)
  }
}