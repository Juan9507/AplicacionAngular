import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { GameFormComponent } from './components/game-form/game-form.component';
import { GameListComponent } from './components/game-list/game-list.component';

// Importo la caperta de los servicios para poder trabajarla desde toda la aplicación
import {GamesService} from './services/games.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    GameFormComponent,
    GameListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // Importamos HttpClientModule para utilizarlo
    FormsModule
  ],
  providers: [
    GamesService // Asignar un proveedor llamado GamesService (es el que tiene los metodos para pedir los datos)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
