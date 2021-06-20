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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const response_module_1 = __importDefault(require("../../modules/response.module"));
const user_controller_1 = __importDefault(require("./user.controller"));
const validar_jwt_middleware_1 = __importDefault(require("../../middlewares/validar-jwt.middleware"));
const router = express_1.default.Router();
// json web token
const jwt = require('jsonwebtoken');
// hash para contraseñas
const bcrypt = require('bcrypt');
router.post('/add', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    // Hashear la contraseña
    const salt = bcrypt.genSaltSync();
    body.contraseña = bcrypt.hashSync(body.contraseña, salt);
    try {
        const result = yield user_controller_1.default.addUser(body);
        response_module_1.default.success(req, res, result, 201);
    }
    catch (error) {
        response_module_1.default.error(req, res, "Error desconocido");
    }
}));
router.post('/signup', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    try {
        const user = yield user_controller_1.default.getUserByEmail(body.correo.toLowerCase());
        const user1 = yield user_controller_1.default.getUserByRUT(body.rut);
        if (user) {
            return res.status(401).send('El Correo ya esta registrado!');
        }
        if (user1) {
            return res.status(401).send('El RUT ya esta registrado!');
        }
        // Hashear la contraseña
        const salt = bcrypt.genSaltSync();
        body.contraseña = bcrypt.hashSync(body.contraseña, salt);
        const result = yield user_controller_1.default.addUser(body);
        const token = yield jwt.sign({ _id: result._id }, process.env.SECRET_JWT_SEED);
        return res.status(200).json({ token, user: result });
        //responseModule.success(req, res, result, 201);
    }
    catch (error) {
        response_module_1.default.error(req, res, "Error desconocido");
    }
}));
router.post('/signin', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    try {
        const user = yield user_controller_1.default.getUserByEmail(body.correo.toLowerCase());
        if (!user)
            return res.status(401).send('Usuario o contraseña incorrectos!');
        // Hashear la contraseña
        /*
        const salt = bcrypt.genSaltSync();
       console.log(bcrypt.hashSync( body.contraseña, salt ))

        */
        // comprobar contraseña
        const comprobarContra = bcrypt.compareSync(body.contraseña, user.contraseña);
        if (!comprobarContra)
            return res.status(401).send('Usuario o contraseña incorrectos!');
        const token = jwt.sign({ _id: user._id }, process.env.SECRET_JWT_SEED);
        return res.status(200).json({ token, user: user });
    }
    catch (error) {
        response_module_1.default.error(req, res, "Error desconocido");
    }
}));
router.get('/all', validar_jwt_middleware_1.default.validarJWT, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield user_controller_1.default.getUsers();
        response_module_1.default.success(req, res, result);
    }
    catch (error) {
        response_module_1.default.error(req, res, "Error desconocido");
    }
}));
router.get('/id/:_id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const _id = req.params._id;
    try {
        const result = yield user_controller_1.default.getUserById(_id);
        response_module_1.default.success(req, res, result);
    }
    catch (error) {
        response_module_1.default.error(req, res, "Error Desconocido");
    }
}));
router.get('/email/:email', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const email = req.params.email;
    try {
        const result = yield user_controller_1.default.getUserByEmail(email);
        response_module_1.default.success(req, res, result);
    }
    catch (error) {
        response_module_1.default.error(req, res, "Error Desconocido");
    }
}));
router.get('/recuperar-cuenta/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const result = yield user_controller_1.default.getUserById(id);
        const token = jwt.sign({ _id: result._id, email: result.correo }, process.env.SECRET_JWT_SEED, {
            expiresIn: '24h'
        });
        return res.status(200).json({ token });
    }
    catch (error) {
        response_module_1.default.error(req, res, "Error Desconocido");
    }
}));
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
router.get('/rut/:rut', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const rut = req.params.rut;
    try {
        const result = yield user_controller_1.default.getUserByRUT(rut);
        response_module_1.default.success(req, res, result);
    }
    catch (error) {
        response_module_1.default.error(req, res, "Error Desconocido");
    }
}));
router.delete('/delete/:_id', validar_jwt_middleware_1.default.validarJWT, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const _id = req.params._id;
    try {
        const result = yield user_controller_1.default.deleteUser(_id);
        response_module_1.default.success(req, res, result);
    }
    catch (error) {
        response_module_1.default.error(req, res, "Error Desconocido");
    }
}));
router.put('/put/:_id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const _id = req.params._id;
    const body = req.body;
    if (body.contraseña) {
        // Hashear la contraseña
        const salt = bcrypt.genSaltSync();
        body.contraseña = bcrypt.hashSync(body.contraseña, salt);
    }
    try {
        const result = yield user_controller_1.default.putUser(_id, body);
        response_module_1.default.success(req, res, result);
    }
    catch (error) {
        response_module_1.default.error(req, res, "Error Desconocido");
    }
}));
exports.default = router;
