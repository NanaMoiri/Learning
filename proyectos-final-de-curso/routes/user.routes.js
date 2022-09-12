import { Router } from 'express';
//  Encriptar password
import { hashSync, compareSync } from 'bcrypt';
// generar password & token
import generator from 'generate-password';
// nodemailer 
import nodeMailer from '../funciones_utiles/nodemailer.js';
// importamos la conexión DB
import conn from '../database/conn.js';
const router = Router();

// signUp (Registro de usuario)
router.post('/login_register/signUp', (req, res) => {
    // recogemos los datos 
    const nombre = req.body.nombre;
    const signUpEmail = req.body.signUpEmail;
    const passSignUp1 = req.body.pass1;
    const passSignUp2 = req.body.pass2;
    // 1- validar datos 
    const email_regexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    if (nombre.length === 0) {
        res.json('Rellena el campo nombre');
    } else if (nombre.length < 1 || nombre.length > 20) {
        res.json('Campo nombre con formato incorrecto');
    } else if (signUpEmail.length === 0) {
        res.json('Rellena el campo email');
    } else if (!email_regexp.test(signUpEmail)) {
        res.json('Campo email con formato incorrecto');
    } else if (passSignUp1.length === 0) {
        res.json('Rellena el campo contraseña');
    } else if (passSignUp1.length < 6) {
        res.json('Campo contraseña con formato incorrecto');
    } else if (passSignUp2.length === 0) {
        res.json('Rellena el campo confirmar contraseña');
    } else if (passSignUp1 !== passSignUp2) {
        res.json('Las contraseñas no coinciden');
    } else {
        // comprobar que el email no está previamente registrado en nuestra DB
        const sql = 'select * from usuario where email = ?';
        conn.query(sql, [signUpEmail], (err, result) => {
            if (err) throw err; // lanza excepción error
            // si la consulta devuelve un valor(array), el email esta registrado
            if (result.length > 0) {
                res.json('El email introducido ya está registrado!');
            } else {
                // encriptar password
                const hashPassSignUp = hashSync(passSignUp1, 10);
                //generamos nuevo password
                const reg_token = generator.generate({
                    length: 100,
                    numbers: true
                });
                //URL token
                const url_host = `${req.protocol}://${req.get('host')}`;
                const url_link = `${url_host}/reg_confirm?email=${signUpEmail}&token=${reg_token}`;
                //enviamos email con link de confirmación y registro
                const html = ` 
                <div> 
                 <h1>Confirmación de registro</h1>
                 <h2>Click <a href="${url_link}">aquí</a> para confirmar el registro</h2> 
                </div> 
                 `;
                nodeMailer('angeldemiprincipe@hotmail.com', signUpEmail, 'confirmación de registro', html)
                    .then(result => {
                        if (result) {
                            //insertamos los datos en la DB
                            const sql = 'insert into usuario values (?,?,?,?,default,default,?)';
                            conn.query(sql, [null, nombre, signUpEmail, hashPassSignUp, reg_token], (err, result) => {
                                if (err) throw err; //lanza excepción de error
                                const sql = 'insert into perfil_usuario (idusuario) values(?)';
                                conn.query(sql, [result.insertId], (err, result) => {
                                    if (err) throw err; // lanza excepción error 
                                    res.json('Usuario registrado correctamente! Revise su correo para confirmar la cuenta');
                                });
                            })
                        } else {
                            res.json('Error al enviar los datos por email');
                        }
                    })
                    .catch(err => console.log(err));
            }

        });
    }
});

// Recuperación de contraseña 
router.post('/forgotPass', (req, res) => {
    // recogemos los datos 
    const forgotPassEmail = req.body.forgotPassEmail;
    // 1- validar datos 
    const email_regexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    if (forgotPassEmail.length === 0) {
        res.json('Rellena el campo email');
    } else if (!email_regexp.test(forgotPassEmail)) {
        res.json('Campo email con formato incorrecto');
    } else {
        // comprobar que el email está previamente registrado en nuestra DB
        const sql = 'select * from usuario where email = ?';
        conn.query(sql, [forgotPassEmail], (err, result) => {
            if (err) throw err; // lanza excepción error
            // si la consulta devuelve un valor(array), el email esta registrado
            if (result.length === 0) {
                res.json('El email introducido no está registrado en nuestra app!');
            } else {
                // generamos un nuevo password
                const newPassword = generator.generate({
                    length: 6,
                    numbers: true
                });
                // enviamos email con nuevo password
                const html = ` 
                    <div> 
                    <h1>Nueva contraseña</h1>
                    <h2>Contraseña: ${newPassword}</h2> 
                    </div> 
                    `;

                nodeMailer('angeldemiprincipe@hotmail.com', forgotPassEmail, 'Recuperación de contraseña', html)
                    .then(result => {
                        if (result) {
                            // insertamos los datos en la DB
                            const hashNewPass = hashSync(newPassword, 10);
                            const sql = 'update usuario set contrasena = ? where email = ?';
                            conn.query(sql, [hashNewPass, forgotPassEmail], (err, result) => {
                                if (err) throw err; // lanza excepción error
                                res.json('Le hemos enviado su nueva contraseña a su correo electrónico');
                            });
                        } else {
                            res.json('Error al enviar los datos por email!');
                        }
                    })
                    .catch(err => console.log(err));
            }
        });
    }
});
//confirmación de registro
router.get('/reg_confirm', (req, res) => {
    const email = req.query.email; //recogemos el email por URL proveniente de link de confirmación de registro 
    const token = req.query.token; // recogemos el token por URL proveniente del link de confirmación de registro
    //comprobar que el token es el mismo del usuario que tiene en la DB
    const sql = 'select reg_token from usuario where email = ?';
    conn.query(sql, [email], (err, result) => {
        const url_host = `${req.protocol}://${req.get('host')}`;
        const url_link = `${url_host}/login_register`;
        if (err) throw err; //lanza excepcion error
        if (result[0].reg_token === token) {
            //actualizar el campo booleano de la DB que confirma el registro por email.
            const sql = 'update usuario set reg_confirm = 1 where email = ?'
            conn.query(sql, [email], (err, result) => {
                if (err) throw err;
                res.send(`<h3>Registro confirmado correctamente!</h3><a href="${url_link}">Volver</a>`);
            });
        } else {
            res.send(`<h3>Ha ocurrido un error con la confirmación del registro!</h3><a href="${url_link}">Volver</a>`);
        }
    });

})


//Autenticación de usuario
router.post('/login_register/logIn', (req, res) => {
    //recogemos los datos
    const logInEmail = req.body.signInEmail;
    const logInPass = req.body.pass;
    // 1-validar datos
    const email_regexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    if (logInEmail.length === 0) {
        res.json('rellena el campo email');
    } else if (!email_regexp.test(logInEmail)) {
        res.json('campo email con formato incorrecto');
    } else { // email validad correctamente
        const sql = "select * from usuario where email = ?"
        conn.query(sql, [logInEmail], (err, result) => {
            if (err) throw err; // lanza excepción error
            if (result.length === 0) { // email no registrado
                res.json('Este email no esta registrado!');
            } else {
                const sql = "select * from usuario where email = ? and reg_confirm = ?";
                conn.query(sql, [logInEmail, true], (err, result) => {
                    if (err) throw err; // lanza excepción error
                    if (result.length === 0) { // registro no confirmado
                        res.json('Registro no confirmado, revise su correo electrónico!');
                    } else {
                        const hashPassword = result[0].contrasena;
                        const comparePasswords = compareSync(logInPass, hashPassword);
                        if (comparePasswords) { // password ok -> LOGIN CORRECTO!!!
                            // iniciamos sesion
                            const sql = 'select * from perfil_usuario P join usuario U on U.idusuario = P.idusuario where email = ?';
                            conn.query(sql, [logInEmail], (err, result) => {
                                if (err) throw err;
                                req.session.nombre = result[0].nombre;
                                req.session.apel = result[0].apellidos;
                                req.session.edad = result[0].edad;
                                req.session.altura = result[0].altura;
                                req.session.idUser = result[0].idusuario;
                                req.session.idPerfil = result[0].id_perfil;
                                req.session.userName = result[0].nombre_usuario;
                                req.session.userEmail = result[0].email;
                                //duracion de la cookie
                                req.session.cookie.maxAge = 1 * 24 * 60 * 60 * 1000 // 1 dia (1d/24h/60m/60s/1000ms)
                                res.json('Datos de entrada correctos!');
                            })
                        } else {
                            res.json('Contraseña incorrecta!');
                        }
                    }
                });
            }

        });
    }
});
//CERRAR SESION
router.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
})
export default router;