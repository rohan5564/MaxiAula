"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const curso_network_1 = __importDefault(require("./curso.network"));
const curso = express_1.default();
curso.use('/curso', curso_network_1.default);
exports.default = curso;
