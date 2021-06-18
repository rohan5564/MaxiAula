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
const express_1 = __importDefault(require("express"));
const components_1 = __importDefault(require("./components"));
const cors_1 = __importDefault(require("cors"));
const mongoose_module_1 = __importDefault(require("./db/mongoose.module"));
const morgan_1 = __importDefault(require("morgan"));
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const server = express_1.default();
        const bodyParser = require('body-parser');
        server.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
        server.use(bodyParser.json({ limit: '50mb' }));
        server.use(express_1.default.json({ limit: '50mb' }));
        server.use(morgan_1.default('dev'));
        server.use(cors_1.default());
        server.use('/api', ...components_1.default);
        //Directorio publico
        //  server.use(express.static('public'));
        try {
            // conectar a la base de datos
            yield mongoose_module_1.default.connect();
            console.log("Conexion Exitosa a la base de datos :D");
            server.listen(process.env.PORT, () => {
                console.log("Servidor Escuchando en: http://localhost:" + process.env.PORT);
            });
        }
        catch (error) {
            console.log("Conexion Fallida D:");
        }
    });
}
exports.default = { main };
