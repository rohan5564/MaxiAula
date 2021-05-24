import { Express } from "express";
import user from "./user";
import curso from './curso/index';


const components: Express[] = [
    
    user,
    curso,
];

export default components;