"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
function connect() {
    const mongooseUri = 'mongodb+srv://admin:np2c9A4T6OrMSaUN@maxiauladb.uiq9u.mongodb.net/MaxiAulaDB?authSource=admin&replicaSet=atlas-5e9y13-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true';
    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    };
    return mongoose_1.default.connect(mongooseUri, options);
}
exports.default = { connect };
