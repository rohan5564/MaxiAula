"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// json web token
const jwt = require('jsonwebtoken');
function validarJWT(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const token = req.header('Authorization');
        if (!token) {
            return res.status(401).send('No esta autorizado');
        }
        try {
            const { email } = yield jwt.verify(token, process.env.SECRET_JWT_SEED);
            //console.log(email)
            if (email) { // campo  especial para recuperar contraseña, se hace esta validacion para una posible vulnerabilidad del recuperar contraseña
                return res.status(401).send('No esta autorizado, el token no es válido');
            }
            //console.log(payload._id)
        }
        catch (e) {
            //console.log(e)
            return res.status(401).send('No esta autorizado, el token no es válido');
        }
        next();
    });
}
exports.default = { validarJWT };
