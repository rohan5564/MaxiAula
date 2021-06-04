import express, { Request, Response, Router } from "express";
import responseModule from "../../modules/response.module";


const router: Router = express.Router();
const configMensaje = require('./mail.controller');

router.post('/mensaje', (req: Request, res: Response) => {
    
    try {
        configMensaje(req.body);
        responseModule.success(req, res, 201);
    } catch (error) {
        responseModule.error(req, res, "Error desconocido");
    }
    
});


export default router;