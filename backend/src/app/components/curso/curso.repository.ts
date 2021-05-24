import cursoSchema from "./curso.schema";
import { Curso } from '../../models/curso.model';


function addCurso(curso: Curso): Promise<Curso> {
    return cursoSchema.create<Curso>(curso);
}

async function getCursos(): Promise<Curso[]> {
    return cursoSchema.find();
}

async function getCursoById(_id: string): Promise<Curso> {
    return await cursoSchema.findById(_id);
}

async function deleteCurso(_id: string): Promise<Curso> {
    return cursoSchema.findByIdAndDelete(_id);
}

async function putCurso(_id: string, curso: Curso): Promise<Curso> {
    return cursoSchema.findByIdAndUpdate(_id, curso);
}



export default { addCurso, getCursos, getCursoById, deleteCurso, putCurso };