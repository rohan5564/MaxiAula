import mongooseModule from "./modules/mongoose.module";
import express, { Express, Request, Response } from "express";
import components from "./components";
import morgan from "morgan";
import cors from "cors";

async function main() {
    
    const server: Express = express();
    const port: number = 57002;
    const bodyParser = require('body-parser');

    server.use(bodyParser.json())
    server.use(express.json());
    server.use(morgan('dev'));
    server.use(cors());
    server.use('/api', ...components);

    try {
        await mongooseModule.connect();
        console.log("Conexion Exitosa :D");

        server.listen(port, () => {
            console.log("Servidor Escuchando en: http://localhost:"+port);
        });

    } catch (error) {
        console.log("Conexion Fallida D:");
    }
}
export default { main };