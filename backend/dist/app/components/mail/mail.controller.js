"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer = require('nodemailer');
module.exports = (mensaje) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'maxiaula21@gmail.com',
            pass: 'MaxiAula2021'
        }
    });
    const mailOptions = {
        from: `MaxiAula  <maxiaula21@gmail.com>`,
        to: `${mensaje.destinatario}`,
        subject: mensaje.asunto,
        html: `
            ${mensaje.cuerpo}
        `
    };
    transporter.sendMail(mailOptions, function (err, info) {
        if (err)
            console.log(err);
        else
            console.log(info);
    });
};
