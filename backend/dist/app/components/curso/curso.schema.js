"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const definition = {
    profACargo: { type: String, required: true },
    nombre: { type: String, required: true },
    descripcion: { type: String },
    anio: { type: Number },
    semestre: { type: Number },
    cratedAt: { type: Date },
    participantes: { type: Array },
    recursos: { type: Array },
    tareas: { type: Array },
    notas: { type: Array },
    portadaURL: { type: String },
    linkChat: { type: String },
    linkArchivos: { type: String },
    linkClases: { type: String }
};
const schema = new mongoose_1.Schema(definition);
exports.default = mongoose_1.model('Curso', schema, 'Cursos');
