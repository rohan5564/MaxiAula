import express, { NextFunction, Request, Response, Router } from "express";

import responseModule from "../../modules/response.module";
import userController from "./user.controller"
import { User } from '../../models/user.model';

const router: Router = express.Router();


const jwt = require('jsonwebtoken');

var userId;

router.post('/add', async(req: Request, res: Response) => {
    const body: User = req.body;

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
        const user = await userController.getUserByEmail(body.correo);
        const user1 = await userController.getUserByRUT(body.rut);
        
        if (user) {           
            return res.status(401).send('El Correo ya esta registrado!');
        }

        if (user1) {           
            return res.status(401).send('El RUT ya esta registrado!');
        }
        const result: User = await userController.addUser(body);
        
        const token = await jwt.sign({_id: result._id}, 'secretkey');
        return res.status(200).json({token, user: result});
        //responseModule.success(req, res, result, 201);
    } catch (error) {
        responseModule.error(req, res, "Error desconocido");
    }

		
});

router.post('/signin', async (req: Request, res: Response) => {
    const body: User = req.body;

    try {
        const user = await userController.getUserByEmail(body.correo);
        
        if (!user) return res.status(401).send('El Correo no esta registrado!');
        if (user.contraseña !== body.contraseña) return res.status(401).send('Contraseña Incorrecta');

		const token = jwt.sign({_id: user._id}, 'secretkey');

        return res.status(200).json({token, user: user});
    } catch (error) {
        responseModule.error(req, res, "Error desconocido");
    }

});

async function verifyToken(req: Request, res: Response, next: NextFunction) {
	try {
		if (!req.headers.authorization) {
			return res.status(401).send('Unauhtorized Request');
		}
		let token = req.headers.authorization.split(' ')[1];
		if (token === 'null') {
			return res.status(401).send('Unauhtorized Request');
		}

		const payload = await jwt.verify(token, 'secretkey');
		if (!payload) {
			return res.status(401).send('Unauhtorized Request');
		}
		userId = payload._id;
		next();
	} catch(e) {
		//console.log(e)
		return res.status(401).send('Unauhtorized Request');
	}
}

router.get('/all', async(req: Request, res: Response) => {
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

router.delete('/delete/:_id', async(req: Request, res: Response) => {
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
    try {
        const result = await userController.putUser(_id, body);
        responseModule.success(req, res, result);
    } catch (error) {
        responseModule.error(req, res, "Error Desconocido");
    }
})



export default router;
