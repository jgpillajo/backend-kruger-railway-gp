//en las opciones vamos a recibir el email a donde vamos a enviar el correo
import nodemailer from "nodemailer";
import configs from "../configs/config.js";
//vamos a recibir el aunto del correo
//vamos a recibir el mensaje del correo
//Options es un objeto que tiene las propiedades email, subject, messages
const sendEmail = async (options) => {
  // vamos a crear la integracion con el servicio de mailtrap usando nodeemailer
  const transporter = nodemailer.createTransport({
    host: "live.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: configs.MAILTRAP_USER,
      pass: configs.MAILTRAP_PASS,
    },
  });
  //vamos a armar las opciones de envio de nuestro correo
  const mailOptions = {
    from: '"Kruger Backend" <no-reply@demomailtrap.com>',
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};

export default sendEmail;
