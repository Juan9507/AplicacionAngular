import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";

import indexRoutes from './routes/indexRoutes'; // Import de la caperta rotes
import gamesRoutes from './routes/gamesRoutes';

class Server {
    public app: Application;
    constructor(){
        this.app = express();
        this.config(); // ejecutar los metodos
        this.routes();
    }

    config(): void{ // Configuración del servidor
        this.app.set('port', process.env.PORT || 3000); // se define y lo Asignar un puerto para start
        this.app.use(morgan('dev')); // Para ver las peticiones que envian
        this.app.use(cors());
        this.app.use(express.json()); // sirve para entender todo en formato json (resivir los datos con el object req.body)
        this.app.use(express.urlencoded({extended:false})); //Para cuando se envia desde un formurario html
    }

    routes(): void{ // Rutas del servidor
        this.app.use(indexRoutes);
        this.app.use('/api/games',gamesRoutes);
    }

    start(): void{// Inicializar el servidor ** Listen** Para que el servido se quede escuchando
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port',this.app.get('port'));
        });
    }
}

const server = new Server();
server.start();