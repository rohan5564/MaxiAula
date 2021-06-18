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
const curso_schema_1 = __importDefault(require("./curso.schema"));
function addCurso(curso) {
    return curso_schema_1.default.create(curso);
}
function getCursos() {
    return __awaiter(this, void 0, void 0, function* () {
        return curso_schema_1.default.find();
    });
}
function getCursoById(_id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield curso_schema_1.default.findById(_id);
    });
}
function deleteCurso(_id) {
    return __awaiter(this, void 0, void 0, function* () {
        return curso_schema_1.default.findByIdAndDelete(_id);
    });
}
function putCurso(_id, curso) {
    return __awaiter(this, void 0, void 0, function* () {
        return curso_schema_1.default.findByIdAndUpdate(_id, curso);
    });
}
exports.default = { addCurso, getCursos, getCursoById, deleteCurso, putCurso };
