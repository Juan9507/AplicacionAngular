import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {GameListComponent} from './components/game-list/game-list.component';

import {GameFormComponent} from './components/game-form/game-form.component';

const routes: Routes = [
  // Agregamos inicial por defecto
    { // Crear un objeto
        path :  '', // con path le decimos donde estara la ruta
        redirectTo : '/games', // redireccionar al usuario a la ruta llamada game
        pathMatch : 'full'
    },
    // Agregamos la ruta games
    {
      path : 'games', //Creamos la ruta llamada games
      component: GameListComponent // Renderisa un componente 
    },
     // Agregamos la ruta add game
    {
      path: 'games/add',
      component : GameFormComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
