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
const user_repository_1 = __importDefault(require("./user.repository"));
function addUser(usuario) {
    return user_repository_1.default.addUser(usuario);
}
function getUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        return (yield user_repository_1.default.getUsers()).reverse();
    });
}
function getUserByEmail(email) {
    return __awaiter(this, void 0, void 0, function* () {
        return user_repository_1.default.getUserByEmail(email);
    });
}
function getUserById(_id) {
    return __awaiter(this, void 0, void 0, function* () {
        return user_repository_1.default.getUserById(_id);
    });
}
function deleteUser(_id) {
    return __awaiter(this, void 0, void 0, function* () {
        return user_repository_1.default.deleteUser(_id);
    });
}
function putUser(_id, user) {
    return __awaiter(this, void 0, void 0, function* () {
        return user_repository_1.default.putUser(_id, user);
    });
}
function getUserByRUT(rut) {
    return __awaiter(this, void 0, void 0, function* () {
        return user_repository_1.default.getUserByRUT(rut);
    });
}
/*
async function getHijos(rut: string): Promise<User[]> {
    let padre: User = await UserRepository.getUserByRUT(rut);
    let mishijos: User[] = await padre.hijos.map((user) => {
        
       return getUserByRUT(user)

    });
    console.log(mishijos)
    mishijos = mishijos.filter(Boolean);
    
    return mishijos;
}
*/
exports.default = { addUser, getUsers, getUserById, getUserByEmail, deleteUser, putUser, getUserByRUT };
