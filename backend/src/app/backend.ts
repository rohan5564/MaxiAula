import express, { Express } from "express";

import components from "./components";
import cors from "cors";
import mongooseModule from "./db/mongoose.module";
import morgan from "morgan";

async function main() {
    
    const server: Express = express();
    const bodyParser = require('body-parser');

    server.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
    server.use(bodyParser.json({limit: '50mb'}))
    server.use(express.json({limit: '50mb'}));
    server.use(morgan('dev'));
    server.use(cors());
    server.use('/api', ...components);

    //Directorio publico
  //  server.use(express.static('public'));
    

    try {
        // conectar a la base de datos
        await mongooseModule.connect();
        console.log("Conexion Exitosa a la base de datos :D");
        
        server.listen(process.env.PORT, () => {
            console.log("Servidor Escuchando en: http://localhost:" + process.env.PORT);
        });

    } catch (error) {
        console.log("Conexion Fallida D:");
    }
}
export default { main };