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
const curso_controller_1 = __importDefault(require("./curso.controller"));
const router = express_1.default.Router();
router.post('/add', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    try {
        const result = yield curso_controller_1.default.addCurso(body);
        response_module_1.default.success(req, res, result, 201);
    }
    catch (error) {
        response_module_1.default.error(req, res, "Error desconocido");
    }
}));
router.get('/all', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield curso_controller_1.default.getCursos();
        response_module_1.default.success(req, res, result);
    }
    catch (error) {
        response_module_1.default.error(req, res, "Error desconocido");
    }
}));
router.get('/id/:_id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const _id = req.params._id;
    try {
        const result = yield curso_controller_1.default.getCursoById(_id);
        response_module_1.default.success(req, res, result);
    }
    catch (error) {
        response_module_1.default.error(req, res, "Error Desconocido");
    }
}));
router.delete('/delete/:_id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const _id = req.params._id;
    try {
        const result = yield curso_controller_1.default.deleteCurso(_id);
        response_module_1.default.success(req, res, result);
    }
    catch (error) {
        response_module_1.default.error(req, res, "Error Desconocido");
    }
}));
router.put('/put/:_id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const _id = req.params._id;
    const body = req.body;
    try {
        const result = yield curso_controller_1.default.putCurso(_id, body);
        response_module_1.default.success(req, res, result);
    }
    catch (error) {
        response_module_1.default.error(req, res, "Error Desconocido");
    }
}));
router.get('/cursosProf/:rut', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const rut = req.params.rut;
    try {
        const result = yield curso_controller_1.default.getCursosProf(rut);
        response_module_1.default.success(req, res, result);
    }
    catch (error) {
        response_module_1.default.error(req, res, "Error Desconocido");
    }
}));
router.get('/cursosAlu/:rut', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const rut = req.params.rut;
    console.log(rut);
    try {
        const result = yield curso_controller_1.default.getCursosAlu(rut);
        response_module_1.default.success(req, res, result);
    }
    catch (error) {
        response_module_1.default.error(req, res, "Error Desconocido");
    }
}));
exports.default = router;
