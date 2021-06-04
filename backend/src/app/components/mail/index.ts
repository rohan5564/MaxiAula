import express, { Express } from 'express';
import router from "./mail.network";

const mail: Express = express();
mail.use('/mail', router);

export default mail;
