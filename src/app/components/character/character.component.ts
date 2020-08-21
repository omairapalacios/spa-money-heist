import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // obtener params

import { CharactersService } from '../../services/characters.services';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',

})
export class CharacterComponent {

  character: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private characterService: CharactersService,
    ) {

  this.activatedRoute.params
    .subscribe( ( param ) => {
      this.character = this.characterService.getCharacterById(param.id);
      return this.character;
    });
  }

}
