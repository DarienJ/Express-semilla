import express from "express";
import cors from "cors";
import dbConnection from "../database/config.js"
import categoria from '../models/categoria.js'

class server {
    constructor() {
        this.port=process.env.PORT;
        this.app = express();

        this.conectarBD();

        this.midlewares();

        this.routes();

    }

    routes(){
        this.app.use('/api/categoria',categoria)
    }

    async conectarBD(){
        await dbConnection();
    }

    midlewares(){
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use(express.static('public'));
    }
    
    listen(){
        this.app.listen(this.port, ()=> {
        console.log(`Servidor abierto y corriendo en el puerto ${this.port}`);
        });
    }    
}

export default server

