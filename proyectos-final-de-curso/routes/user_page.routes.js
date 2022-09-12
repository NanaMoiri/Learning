import { Router } from "express";
import conn from "../database/conn.js";

const router = Router();
//Añadir datos en perfil_Usuario
router.put('/user_page/edit', (req, res) => {
  //recogemos los datos del fetch
  const userName = req.body.nombre_de_usuario;
  const nombre = req.body.nombre;
  const apellidos = req.body.apellidos;
  const edad = req.body.edad;
  const altura = req.body.altura;
  const idusuario = req.session.idUser;

  //validamos los datos
  if (userName.length === 0){
    res.json('Rellena el campo Nombre de Usuario')
  } else if (userName.length < 1 || userName.length > 30){ 
    res.json('Nombre usuario con formato incorrecto')
  } else if (nombre.length === 0) {
    res.json('Rellena el campo nombre')
  } else if (nombre.length < 1 || nombre.length > 30) {
    res.json('Nombre con formato incorrecto')
  } else if (apellidos.length === 0) {
    res.json('Rellena el campo nombre')
  } else if (apellidos.length < 1 || apellidos.length > 30) {
    res.json('Apellidos con formato incorrecto')
  } else if (edad === null) {
    res.json('Introduce una edad')
  } else if (altura === null) {
    res.json('Introduce una altura')
  } else {
    const sql = 'update perfil_usuario set nombre = ?, apellidos = ?, edad = ?, altura = ? where idusuario = ?';
    conn.query(sql, [nombre, apellidos, edad, altura, idusuario], (err, result) => {
      if (err) throw err;
      const sql2 = 'update usuario set nombre_usuario = ? where idusuario = ?'
      conn.query(sql2, [userName, idusuario], (err, result) => {
        if (err) throw err;
        res.json('Datos editados correctamente');
      });
    });

  }
})
export default router;