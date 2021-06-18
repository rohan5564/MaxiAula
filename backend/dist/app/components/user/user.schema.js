"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const definition = {
    rut: { type: String },
    nombre: { type: String },
    contraseña: { type: String },
    fechaNac: { type: Date },
    correo: { type: String },
    tipo: { type: Number },
    hijos: { type: Array }
};
const schema = new mongoose_1.Schema(definition);
exports.default = mongoose_1.model('User', schema, 'Users');
