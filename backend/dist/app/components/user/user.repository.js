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
const user_schema_1 = __importDefault(require("./user.schema"));
function addUser(usuario) {
    return user_schema_1.default.create(usuario);
}
function getUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        return user_schema_1.default.find();
    });
}
function getUserByEmail(correo) {
    return __awaiter(this, void 0, void 0, function* () {
        return user_schema_1.default.findOne({ correo: correo }, function (err, obj) {
            if (err)
                console.log(err);
        });
    });
}
function getUserById(_id) {
    return __awaiter(this, void 0, void 0, function* () {
        return user_schema_1.default.findById(_id);
    });
}
function deleteUser(_id) {
    return __awaiter(this, void 0, void 0, function* () {
        return user_schema_1.default.findByIdAndDelete(_id);
    });
}
function putUser(_id, user) {
    return __awaiter(this, void 0, void 0, function* () {
        return user_schema_1.default.findByIdAndUpdate(_id, user);
    });
}
function getUserByRUT(rut) {
    return __awaiter(this, void 0, void 0, function* () {
        return user_schema_1.default.findOne({ rut: rut }, function (err, obj) {
            if (err)
                console.log(err);
        });
    });
}
exports.default = { addUser, getUsers, getUserById, getUserByEmail, deleteUser, putUser, getUserByRUT };
