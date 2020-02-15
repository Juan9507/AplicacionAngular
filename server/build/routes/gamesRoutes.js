"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gamesController_1 = __importDefault(require("../controllers/gamesController"));
class GamesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', gamesController_1.default.list); // listar todos los juegos (leer)
        this.router.get('/:id', gamesController_1.default.listOne); // listar solo un juego (leer)
        this.router.post('/', gamesController_1.default.create); // Agregar juegos 
        this.router.put('/:id', gamesController_1.default.update); // Actualizar un juego
        this.router.delete('/:id', gamesController_1.default.delete); // Eliminar un dato
    }
}
const gamesRoutes = new GamesRoutes();
exports.default = gamesRoutes.router; // Se exporta la clase
