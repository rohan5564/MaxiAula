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
const curso_repository_1 = __importDefault(require("./curso.repository"));
function addCurso(curso) {
    curso.cratedAt = new Date();
    return curso_repository_1.default.addCurso(curso);
}
function getCursos() {
    return __awaiter(this, void 0, void 0, function* () {
        return (yield curso_repository_1.default.getCursos()).reverse();
    });
}
function getCursoById(_id) {
    return __awaiter(this, void 0, void 0, function* () {
        return curso_repository_1.default.getCursoById(_id);
    });
}
function deleteCurso(_id) {
    return __awaiter(this, void 0, void 0, function* () {
        return curso_repository_1.default.deleteCurso(_id);
    });
}
function putCurso(_id, noticia) {
    return __awaiter(this, void 0, void 0, function* () {
        return curso_repository_1.default.putCurso(_id, noticia);
    });
}
function getCursosProf(rut) {
    return __awaiter(this, void 0, void 0, function* () {
        let cursos = yield curso_repository_1.default.getCursos();
        let cursosProf = cursos.map((curso) => {
            if (curso.profACargo === rut) {
                return curso;
            }
        });
        cursosProf = cursosProf.filter(Boolean);
        return cursosProf;
    });
}
function getCursosAlu(rut) {
    return __awaiter(this, void 0, void 0, function* () {
        let cursos = yield curso_repository_1.default.getCursos();
        let cursosAlu = cursos.map((curso) => {
            if (curso.participantes.find(item => item === rut)) {
                return curso;
            }
        });
        cursosAlu = cursosAlu.filter(Boolean);
        return cursosAlu;
    });
}
exports.default = { addCurso, getCursos, getCursoById, deleteCurso, putCurso, getCursosProf, getCursosAlu };
