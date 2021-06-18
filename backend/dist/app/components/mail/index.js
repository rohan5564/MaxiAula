"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mail_network_1 = __importDefault(require("./mail.network"));
const mail = express_1.default();
mail.use('/mail', mail_network_1.default);
exports.default = mail;
