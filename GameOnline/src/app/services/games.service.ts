import { Injectable } from '@angular/core';

// importamos el modulo de Angular para http 
import {HttpClient} from '@angular/common/http'; // permite hacer peticiones http

// Importar el archivo de models game.ts
import {Game} from '../models/game';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GamesService {
  // Guardar la url del api

  api_uri = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { } // se intancia el HttpClient

  // Crear los metodos

  getGames(){ // Devolver todos los juegos
    return this.http.get(`${this.api_uri}/games`);
  }

  getGame(id: string){ // Devolver solo un juego
    return this.http.get(`${this.api_uri}/games/${id}`);
  }

  deleteGame(id: string){ // Eliminar un registro
    return this.http.delete(`${this.api_uri}/games/${id}`);
  }

  saveGame(game: Game){ // Insertar un registro
    return this.http.post(`${this.api_uri}/games`, game);
  }

  updateGame(id : string, updateGame:Game){ // Actualizar se le pasa dos parametros 
    return this.http.put(`${this.api_uri}/games/${id}`, updateGame);
  }
    
}
 
