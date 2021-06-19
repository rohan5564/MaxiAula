"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const response_module_1 = __importDefault(require("../../modules/response.module"));
const router = express_1.default.Router();
const configMensaje = require('./mail.controller');
router.post('/mensaje', (req, res) => {
    try {
        configMensaje(req.body);
        response_module_1.default.success(req, res, 'Se envió el email', 201);
    }
    catch (error) {
        response_module_1.default.error(req, res, "Error desconocido");
    }
});
exports.default = router;
