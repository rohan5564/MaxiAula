import express, { NextFunction, Request, Response, Router } from "express";

import { User } from '../../models/user.model';
import responseModule from "../../modules/response.module";
import userController from "./user.controller"
import validaJWT from "../../middlewares/validar-jwt.middleware"

const router: Router = express.Router();

// json web token
const jwt = require('jsonwebtoken');
// hash para contraseñas
const bcrypt = require('bcrypt');


router.post('/add', async(req: Request, res: Response) => {
    const body: User = req.body;

    // Hashear la contraseña
   const salt = bcrypt.genSaltSync();
   body.contraseña = bcrypt.hashSync( body.contraseña, salt );

    try {
        const result: User = await userController.addUser(body);
        responseModule.success(req, res, result, 201);
    } catch (error) {
        responseModule.error(req, res, "Error desconocido");
    }
});

router.post('/signup', async (req: Request, res: Response) => {
    const body: User = req.body;
    try {
        const user = await userController.getUserByEmail(body.correo.toLowerCase());
        const user1 = await userController.getUserByRUT(body.rut);
        
        if (user) {           
            return res.status(401).send('El Correo ya esta registrado!');
        }

        if (user1) {           
            return res.status(401).send('El RUT ya esta registrado!');
        }
        // Hashear la contraseña
        const salt = bcrypt.genSaltSync();
        body.contraseña = bcrypt.hashSync( body.contraseña, salt );
        
        const result: User = await userController.addUser(body);
        
        const token = await jwt.sign({_id: result._id}, process.env.SECRET_JWT_SEED);
        return res.status(200).json({token, user: result});
        //responseModule.success(req, res, result, 201);
    } catch (error) {
        responseModule.error(req, res, "Error desconocido");
    }		
});



router.post('/signin', async (req: Request, res: Response) => {
    const body: User = req.body;

    try {
        const user = await userController.getUserByEmail(body.correo.toLowerCase());
        
        if (!user) return res.status(401).send('Usuario o contraseña incorrectos!');

         // Hashear la contraseña
        /*
        const salt = bcrypt.genSaltSync();
       console.log(bcrypt.hashSync( body.contraseña, salt )) 

        */
        // comprobar contraseña
        const comprobarContra = bcrypt.compareSync(body.contraseña, user.contraseña );
        
        if (!comprobarContra) return res.status(401).send('Usuario o contraseña incorrectos!');

		const token = jwt.sign({_id: user._id}, process.env.SECRET_JWT_SEED);

        return res.status(200).json({token, user: user});
    } catch (error) {
        responseModule.error(req, res, "Error desconocido");
    }

});



router.get('/all', validaJWT.validarJWT ,async(req: Request, res: Response) => {
    try {
        const result: User[] = await userController.getUsers();
        responseModule.success(req, res, result);
    } catch (error) {
        responseModule.error(req, res, "Error desconocido");
    }
});

router.get('/id/:_id', async(req: Request, res: Response) => {
    const _id: string = req.params._id;
    try {
        const result = await userController.getUserById(_id);
        responseModule.success(req, res, result);
    } catch (error) {
        responseModule.error(req, res, "Error Desconocido");
    }
});

router.get('/email/:email', async(req: Request, res: Response) => {
    const email: string = req.params.email;
    try {
        const result = await userController.getUserByEmail(email);
        responseModule.success(req, res, result);
    } catch (error) {
        responseModule.error(req, res, "Error Desconocido");
    }
});

router.get('/recuperar-cuenta/:id', async(req: Request, res: Response) => {
    const id: string = req.params.id;
    
    try {
        const result = await userController.getUserById(id);
        const token = jwt.sign({_id: result._id, email: result.correo }, process.env.SECRET_JWT_SEED, {
            expiresIn: '24h'
        });
        return res.status(200).json({token});
    } catch (error) {
        responseModule.error(req, res, "Error Desconocido");
    }
});

/*
router.get('/hijos/:rut', async(req: Request, res: Response) => {
    const rut: string = req.params.rut;
    try {
        const result = await userController.getHijos(rut);
        responseModule.success(req, res, result);
    } catch (error) {
        responseModule.error(req, res, "Error Desconocido");
    }
});
*/

router.get('/rut/:rut', async(req: Request, res: Response) => {
    const rut: string = req.params.rut;
    try {
        const result = await userController.getUserByRUT(rut);
        responseModule.success(req, res, result);
    } catch (error) {
        responseModule.error(req, res, "Error Desconocido");
    }
});

router.delete('/delete/:_id', validaJWT.validarJWT ,async(req: Request, res: Response) => {
    const _id: string = req.params._id;
    try {
        const result = await userController.deleteUser(_id);
        responseModule.success(req, res, result);
    } catch (error) {
        responseModule.error(req, res, "Error Desconocido");
    }
})

router.put('/put/:_id', async(req: Request, res: Response) => {
    const _id: string = req.params._id;
    const body: User = req.body;

    if(body.contraseña) {

        // Hashear la contraseña
        const salt = bcrypt.genSaltSync();
        body.contraseña = bcrypt.hashSync( body.contraseña, salt );
    }
    try {
        const result = await userController.putUser(_id, body);
        responseModule.success(req, res, result);
    } catch (error) {
        responseModule.error(req, res, "Error Desconocido");
    }
})



export default router;
