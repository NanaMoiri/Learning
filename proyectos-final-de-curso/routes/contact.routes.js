import { Router } from 'express';
import nodeMailer from '../funciones_utiles/nodemailer.js';
const router = Router();

//nodemailer
import nodemailer from '../funciones_utiles/nodemailer.js';

//contact
router.post('/contact/emailSend', (req, res) => {
  const name = req.body.nombre;
  const email = req.body.email;
  const message = req.body.mensaje;
  //validamos los datos
  const email_regexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  if(name.length === 0){
    res.json('Rellena el campo nombre');
  } else if (name.length < 1 || name.length > 20){
    res.json('Campo nombre con formato incorrecto')
  } else if (email.length === 0){
    res.json('Rellena el campo email')
  } else if (!email_regexp.test(email)){
    res.json('Campo email con formato incorrecto');
  } else if (message.length === 0) {
    res.json('Rellena el campo mensaje')
  } else if (message.length < 10 || message.length > 100) {
    res.json('El mensaje debe contener entre 10 y 100 carácteres')
  } else {
    //Si todo es correcto enviamos el mail
    const html = ` 
                  <div> 
                    <h1>Datos de Formulario de contacto</h1>
                    <h2>Nombre: ${name}</h2> 
                    <h2>Email: ${email}</h2> 
                    <h2>Mensaje:</h2> <p>${message}</p> 
                  </div> 
                `;
    nodeMailer('netmind22@gmail.com', 'netmind22@gmail.com', 'Email from Contact at Fitnesdotcom', html)
      .then(result => {
        if(result) {
          res.json('Hemos recibido tu mensaje');
        } else {
          res.json('Ha habido un error al enviar los datos por email');
        }
      })
      .catch(err => console.log(err));
  }
})

export default router;
