import { Component, OnInit, HostBinding } from '@angular/core';
import { Game } from 'src/app/models/game'; // Traemos el modelo games

import {GamesService} from '../../services/games.service';



@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  game : Game = {
    id : 0,
    title : '',
    description : '',
    image : '',
    created_ad : new Date()

  };

  constructor( private gamesservice : GamesService) { }

  ngOnInit(): void {
  }

  // GUARDAR LOS DATOS ENVIADOS DESDE EL FORMULARIO

    saveNewGame(){
      // console.log(this.game);
      delete this.game.created_ad;
      delete this.game.id;
      this.gamesservice.saveGame(this.game)
        .subscribe(
          res => {
              console.log(res) 
              if (res=true) {
                this.game.id=0;
                this.game.title='';
                this.game.description='';
                this.game.created_ad = new Date();
                this.game.image='';
              }
          },
          err => console.log(err)
        )
    }
}
