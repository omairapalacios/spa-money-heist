import { RouterModule, Routes} from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { SeasonsComponent } from './components/seasons/seasons.component';
import { CharactersComponent } from './components/characters/characters.component';
import { CharacterComponent } from './components/character/character.component';
import { SearchComponent  } from './components/search/search.component';


const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'seasons', component: SeasonsComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'character/:id', component: CharacterComponent },
  { path: 'search/:text', component: SearchComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
