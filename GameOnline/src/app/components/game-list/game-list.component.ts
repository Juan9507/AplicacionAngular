import { Component, OnInit, HostBinding } from '@angular/core';
// import {Reloa} from '@angular/router'

import {GamesService} from '../../services/games.service'; // Importo game services (el servicio)
import { Game } from 'src/app/models/game';
@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

    @HostBinding('class') classes = 'row';

    games : any = [];

  constructor(private gamesService : GamesService) { }

  gameConsulta() {
    this.gamesService.getGames().subscribe(
      res => {
        this.games = res;
      },
      err => console.log(err)
    ) // Retornar los juegos desde el inicio
  }

  ngOnInit(): void {
    // consultar juegos
    this.gameConsulta();

    // Metodo para eliminar un registro
    
  }

  deleteGame(id: string){
      this.gamesService.deleteGame(id).subscribe(
          res => {
            this.gameConsulta();
            console.log(res);
            // this.games = res;
            // if(res === true){
            //   this.gameConsulta();
            // }
          },
          err => console.log(err)
        )
  }

  

}
