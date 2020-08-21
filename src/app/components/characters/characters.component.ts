import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../services/characters.services';

import { Router} from '@angular/router';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
})
export class CharactersComponent implements OnInit {

  characters: any[] = [];

  constructor(
    private charactersService: CharactersService,
    private router: Router
    ) {
  }

  ngOnInit(): void {
    this.characters = this.charactersService.getCharacters();
  }

  showCharacter( id: number) {
    return this.router.navigate(['/character', id]);
  }

}
