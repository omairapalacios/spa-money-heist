import { Component, OnInit, Input } from '@angular/core';
import { Router} from '@angular/router';


@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
})
export class CharacterCardComponent implements OnInit {

  @Input() character: any = [];
  @Input() index: number;
  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  showCharacter() {
    return this.router.navigate(['/character', this.index]);
  }
}
