import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // evitar que recargue el form
import { NgModule } from '@angular/core';

// rutas
import { APP_ROUTING } from './app.routes';

// servicios
import { CharactersService } from './services/characters.services';

// components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SeasonsComponent } from './components/seasons/seasons.component';
import { CharactersComponent } from './components/characters/characters.component';
import { CharacterComponent } from './components/character/character.component';
import { SearchComponent } from './components/search/search.component';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { FooterComponent } from './components/shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SeasonsComponent,
    CharactersComponent,
    CharacterComponent,
    SearchComponent,
    CharacterCardComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    APP_ROUTING,
  ],
  providers: [
    CharactersService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
