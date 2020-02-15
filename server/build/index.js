"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes")); // Import de la caperta rotes
const gamesRoutes_1 = __importDefault(require("./routes/gamesRoutes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config(); // ejecutar los metodos
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000); // se define y lo Asignar un puerto para start
        this.app.use(morgan_1.default('dev')); // Para ver las peticiones que envian
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json()); // sirve para entender todo en formato json (resivir los datos con el object req.body)
        this.app.use(express_1.default.urlencoded({ extended: false })); //Para cuando se envia desde un formurario html
    }
    routes() {
        this.app.use(indexRoutes_1.default);
        this.app.use('/api/games', gamesRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
