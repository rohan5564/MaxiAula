"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("./user"));
const index_1 = __importDefault(require("./curso/index"));
const index_2 = __importDefault(require("./mail/index"));
const components = [
    user_1.default,
    index_1.default,
    index_2.default
];
exports.default = components;
