import {Router} from 'express';
import gamesController from '../controllers/gamesController'
class GamesRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config() : void{
        this.router.get('/', gamesController.list); // listar todos los juegos (leer)
        this.router.get('/:id', gamesController.listOne); // listar solo un juego (leer)
        this.router.post('/', gamesController.create); // Agregar juegos 
        this.router.put('/:id', gamesController.update); // Actualizar un juego
        this.router.delete('/:id', gamesController.delete); // Eliminar un dato
    }
}

const gamesRoutes = new GamesRoutes();
export default gamesRoutes.router; // Se exporta la clase