import { NextFunction } from "express";

// json web token
const jwt = require('jsonwebtoken');

async function validarJWT(req, res, next: NextFunction) {

    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).send('No esta autorizado');
    }

	try {
	
		const { email } = await jwt.verify(token, process.env.SECRET_JWT_SEED);
		//console.log(email)
		if (email) { // campo  especial para recuperar contraseña, se hace esta validacion para una posible vulnerabilidad del recuperar contraseña
			return res.status(401).send('No esta autorizado, el token no es válido');
		}
        //console.log(payload._id)
		
	} catch(e) {
		//console.log(e)
		return res.status(401).send('No esta autorizado, el token no es válido');
	}
	next();
}

export default { validarJWT }