"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database")); // llamar la base de datos
class GamesController {
    // *******METHOD FOR MAKING CONSULTATION OF ALL STORED ELEMENTS************
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // res.send('games')
            // console.log(games);
            yield database_1.default.query('SELECT * FROM games', function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    // *******METHOD ONLY TO MAKE THE CONSULTATION OF A SINGLE ELEMENT****************
    listOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //res.json({text: 'Listing one game' + req.params.id});
            const { id } = req.params;
            let sql = ('SELECT * FROM games WHERE id = ?');
            yield database_1.default.query(sql, [id], function (err, result) {
                if (err)
                    throw err;
                if (result.length > 0) {
                    return res.json(result[0]);
                    // console.log(result);
                    // res.json({message:'Game Founded'});
                }
                res.status(404).json({ text: "the game doesn't exists" });
            });
            // await pool.query('SELECT * FROM games WHERE id = ?',[id]);
        });
    }
    // *****************METHOD TO REGISTER AN ELEMENT**************************
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO games set ?', [req.body]); // await sirve para decir que va a tomar tiempo
            // console.log(req.body); // tendra los valores de los datos que son enviados desde Angular
            res.json({ message: 'Game Saved' });
        });
    }
    // *******************METHOD FOR UPDATING AN ELEMENT************************
    update(req, res) {
        const { id } = req.params;
        database_1.default.query('UPDATE games set ? WHERE id=?', [req.body, id]);
        res.json({ message: "The was updated" });
        // res.json({text:'Updating a game ' + req.params.id}); // Actualizar un juego, req.params.id es para resivir el id (para ver el numero)
    }
    // ********************METHOD FOR DELETE AN ELEMENTO**************************
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // res.json({text:'Delete a game ' + req.params.id}); // Eliminar un juego
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM games WHERE id = ?', [id]);
            res.json({ message: 'The game was delete' });
        });
    }
}
const gamesController = new GamesController();
exports.default = gamesController;
