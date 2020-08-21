import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // obtener params

import { CharactersService } from '../../services/characters.services';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit{

  characters: any[] = [];
  text: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private charactersService: CharactersService
  ) {
  }

  ngOnInit(){
    this.activatedRoute.params
    .subscribe(( params ) => {
      this.text = params.text;
      this.characters = this.charactersService.searchCharacter(params.text);
      return this.characters;
    });
  }

}
