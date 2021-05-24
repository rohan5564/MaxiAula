import express, { Express } from 'express';
import router from "./curso.network";

const curso: Express = express();
curso.use('/curso', router);

export default curso;