import { Router } from "express";
import conn from '../database/conn.js';
import { dateTimeConverter } from '../funciones_utiles/dateTimeConverter.js';
const router = Router();

//actualiizar estadísticas

router.post('/progress/stats', (req, res) => {
  const peso = req.body.peso;
  const imc = req.body.imc;
  const bmr = req.body.bmr;
  const fecha_actu = dateTimeConverter(new Date());

  if (peso.length === 0) {
    res.json('Rellena el campo peso');
  } else if (peso.length < 1){
    res.json('Peso con formato incorrecto');
  } else if (imc.length === 0) {
    res.json('Rellena el campo IMC');
  } else if (imc.length < 1 || imc.length > 30){
    res.json('IMC con formato incorrecto');
  } else if (bmr.length === 0){
    res.json('Rellena el campo BMR');
  } else if (bmr.length < 1 || bmr.length > 30){
    res.json('BMR con formato incorrecto');
  } else {
    const sql = 'insert into datos_calendario values (?,?,?,?,?,?,?)'
    conn.query(sql, [null, fecha_actu, peso, imc, bmr, req.session.idPerfil, req.session.idUser], (err, result) => {
      if (err) throw err;
      res.json('Datos añadidos correctamente');
    })
  }
})

//añadir imagenes
router.post('/progress/add', (req, res) => {
  const imagantdel = req.files.addImagAntDel;
  const imagantdet = req.files.addImagAntDet;

  imagantdel.mv(`uploads/${req.session.idUser}/antes/${imagantdel.name}`, err => {
    if (err) throw err;
  });
  imagantdet.mv(`uploads/${req.session.idUser}/antes/${imagantdet.name}`, err => {
  if (err) throw err;});

  const imagenURL1 = `${req.session.idUser}/antes/${imagantdel.name}`;
  const imagenURL2 = `${req.session.idUser}/antes/${imagantdet.name}`;
  const fecha_creacion = dateTimeConverter(new Date());
  const sql = 'insert into fotos_antes values (?,?,?,?,?,?)';
  conn.query(sql, [null, fecha_creacion, imagenURL1, imagenURL2, req.session.idPerfil, req.session.idUser], (err, result) => {
    if (err) throw err;
    res.json('Imagenes subidas correctamente');
  })
})

router.post('/progress/add2', (req, res) => {
  const imagdesdel = req.files.addImagDesDel;
  const imagdesdet = req.files.addImagDesDet;

  imagdesdel.mv(`uploads/${req.session.idUser}/despues/${imagdesdel.name}`, err => {
    if (err) throw err;
  });
  imagdesdet.mv(`uploads/${req.session.idUser}/despues/${imagdesdet.name}`, err => {
  if (err) throw err;});

  const imagenURL1 = `${req.session.idUser}/despues/${imagdesdel.name}`;
  const imagenURL2 = `${req.session.idUser}/despues/${imagdesdet.name}`;
  const fecha_creacion = dateTimeConverter(new Date());
  const sql = 'insert into fotos_despues values (?,?,?,?,?,?)';
  conn.query(sql, [null, fecha_creacion, imagenURL1, imagenURL2, req.session.idPerfil, req.session.idUser], (err, result) => {
    if (err) throw err;
    res.json('Imagenes subidas correctamente');
  })
})
export default router;