import express, { Express } from 'express';
import router from "./user.network";

const usuario: Express = express();
usuario.use('/user', router);

export default usuario;