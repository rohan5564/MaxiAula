import { Mail } from '../../models/mail.model';

const nodemailer = require('nodemailer');

module.exports = (mensaje : Mail) => {

    var transporter = nodemailer.createTransport({ // crear transportador del email usando gmail 

    service: 'gmail',
    auth: {
        user: 'maxiaula21@gmail.com', 
        pass: 'MaxiAula2021' 
    }

    });

    const mailOptions = { // objeto con las opciones del mail
        from: `MaxiAula  <maxiaula21@gmail.com>`,
        to: `${mensaje.destinatario}`, 
        subject: mensaje.asunto,
        html: `
            ${mensaje.cuerpo}
        `
        };

    transporter.sendMail(mailOptions, function (err, info) { // enviar el mensaje
        if (err)
            console.log(err)
        else
            console.log(info);
    });

}