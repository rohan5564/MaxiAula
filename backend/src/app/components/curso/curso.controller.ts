import cursoRepository from "./curso.repository";
import { Curso } from '../../models/curso.model';



function addCurso(curso: Curso): Promise<Curso> {
    curso.cratedAt = new Date();

    return cursoRepository.addCurso(curso);
}

async function getCursos(): Promise<Curso[]> {
    return (await cursoRepository.getCursos()).reverse();
}

async function getCursoById(_id: string): Promise<Curso> {
    return cursoRepository.getCursoById(_id);
}

async function deleteCurso(_id: string): Promise<Curso> {
    return cursoRepository.deleteCurso(_id);
}

async function putCurso(_id: string, noticia: Curso): Promise<Curso> {
    return cursoRepository.putCurso(_id, noticia);
}


async function getCursosProf(rut: string): Promise<Curso[]> {
    let cursos: Curso[] = await cursoRepository.getCursos();
    let cursosProf: Curso[] = cursos.map((curso) => {
        if(curso.profACargo === rut) {
            return curso;
        }
    });
    cursosProf = cursosProf.filter(Boolean);
    
    return cursosProf;
}

async function getCursosAlu(rut: string): Promise<Curso[]> {
    let cursos: Curso[] = await cursoRepository.getCursos();
    let cursosAlu: Curso[] = cursos.map((curso) => {
        if(curso.participantes.find(item => item === rut)) {
            return curso;
        }

    });
    cursosAlu = cursosAlu.filter(Boolean);
    
    return cursosAlu;
}


export default { addCurso, getCursos, getCursoById, deleteCurso, putCurso, getCursosProf, getCursosAlu };