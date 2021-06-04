import { Express } from "express";
import user from "./user";
import curso from './curso/index';
import mail from './mail/index';


const components: Express[] = [
    
    user,
    curso,
    mail
];

export default components;