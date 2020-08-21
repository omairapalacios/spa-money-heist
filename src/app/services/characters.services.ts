import { Injectable } from '@angular/core';

import { DATA } from '../../assets/data/data';

@Injectable()
export class CharactersService {
  private characters: Characters[] = DATA;

  constructor() {
  }

  getCharacters() {
    return this.characters;
  }

  getCharacterById( id: string) {
    return this.characters[id];
  }

  searchCharacter( text: string ){
    const charactersArr: Characters[] = [];
    text = text.toLowerCase();
    for (let i = 0; i < this.characters.length; i++) {
    const character = this.characters[i];
    const alias = character.alias.toLowerCase();

    if ( alias.indexOf( text ) >= 0 ) {
        character.id = i;
        charactersArr.push( character );
      }
  }
    return charactersArr;
  }

/*   searchCharacter( text: string ){
    const charactersArr: Characters[] = [];
    text = text.toLowerCase();
    for (const character of this.characters ) {
      const alias = character.alias.toLowerCase();
      const nombre = character.nombre.toLowerCase();
      if ( alias.indexOf( text ) >= 0 || nombre.indexOf( text ) >= 0 )  {
        charactersArr.push( character );
      }
    }
    return charactersArr;
  } */
}

export interface Characters {
  alias: string;
  nombre: string;
  interprete: string;
  bio: string;
  img: string;
  grupo: string;
  id?: number;
}
