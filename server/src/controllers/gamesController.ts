import {Request, Response} from 'express';

import pool from '../database'; // llamar la base de datos
import { promises } from 'dns';

class GamesController{
   // *******METHOD FOR MAKING CONSULTATION OF ALL STORED ELEMENTS************
   public async list (req:Request, res:Response) {
      // res.send('games')
      // console.log(games);
      await pool.query('SELECT * FROM games', function(err, result, fields) {
         if (err) throw err;
         res.json(result);
     });
   } 

   // *******METHOD ONLY TO MAKE THE CONSULTATION OF A SINGLE ELEMENT****************

   public async listOne(req:Request, res:Response): Promise<any>{ // mostrar solo un juego
      //res.json({text: 'Listing one game' + req.params.id});
      const {id} = req.params;
      let sql = ('SELECT * FROM games WHERE id = ?');
      await pool.query(sql,[id], function(err,result){
         if(err) throw err;
            if(result.length>0){
               return res.json(result[0]);
               // console.log(result);
               // res.json({message:'Game Founded'});
            }
            res.status(404).json({text: "the game doesn't exists"});
         
      })
      // await pool.query('SELECT * FROM games WHERE id = ?',[id]);
   }

   // *****************METHOD TO REGISTER AN ELEMENT**************************

   public async create(req:Request, res:Response): Promise<void>{ //Crear un juego (Promise<void> es para decir que no devuelve nada)
      await pool.query('INSERT INTO games set ?', [req.body]); // await sirve para decir que va a tomar tiempo
      // console.log(req.body); // tendra los valores de los datos que son enviados desde Angular
      res.json({message:'Game Saved'});
   }

   // *******************METHOD FOR UPDATING AN ELEMENT************************

   public update(req:Request, res:Response){
      const {id} = req.params;
      pool.query('UPDATE games set ? WHERE id=?',[req.body, id]);
      res.json({message:"The was updated"});
      // res.json({text:'Updating a game ' + req.params.id}); // Actualizar un juego, req.params.id es para resivir el id (para ver el numero)
   }

   // ********************METHOD FOR DELETE AN ELEMENTO**************************

   public async delete(req:Request, res:Response): Promise<void>{
      // res.json({text:'Delete a game ' + req.params.id}); // Eliminar un juego
      const {id} = req.params;
      await pool.query('DELETE FROM games WHERE id = ?',[id]);
      res.json({message: 'The game was delete'});
   }
}

const gamesController = new GamesController();
export default gamesController;