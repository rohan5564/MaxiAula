import { Document, Schema, model } from "mongoose";

import { Curso } from '../../models/curso.model';

const definition: Partial<Record<keyof Curso, any>> = {

    profACargo: { type: String, required: true},
    nombre: { type: String, required: true },
    descripcion: { type: String },
    anio: { type: Number },
    semestre: { type: Number},
    cratedAt: { type: Date },
    participantes: { type: Array },
    recursos: { type: Array },
    tareas: { type: Array },
    notas: { type: Array },
    portadaURL: { type: String },
    linkChat: { type: String },
    linkArchivos: { type: String },
    linkClases: { type: String }
}

const schema: Schema<Curso> = new Schema(definition)

export default model<Curso & Document>('Curso', schema, 'Cursos');