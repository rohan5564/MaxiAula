"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function success(req, res, message, status) {
    let statusCode = status || 200;
    res.status(statusCode).send({
        error: "",
        status: statusCode,
        message: message
    });
}
function error(req, res, message, status) {
    let statusCode = status || 500;
    res.status(statusCode).send({
        error: message,
        status: statusCode,
        message: ""
    });
}
exports.default = { success, error };
