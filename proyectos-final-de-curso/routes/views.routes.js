import { Router } from 'express';
import conn from '../database/conn.js';
const router = Router();
//RUTAS PUBLICAS
//Pagina de Index
router.get('/', (req, res) => {
  res.render('index', {
    idUser: res.locals.idUser,
    pageName: 'index'
  });
});

//Pagina de Login/Registro
router.get('/login_register', (req, res) => {
  if (req.session.idUser) { //si existe sesion
    res.redirect('user_page')
  } else {
    res.render('login_register', {
      idUser: res.locals.idUser,
      pageName: 'login_register'
    });
  }
});

//Pagina de contacto
router.get('/contact', (req, res) => {
  res.render('contact', {
    idUser: res.locals.idUser,
    pageName: 'contact'
  });;
});
//pagina 404
router.get('/404', (req, res) => {
  res.render('404', {
    idUser: res.locals.idUser,
    pageName: '404'
  });;
});

//pagina utilidades
router.get('/utilities', (req, res) => {
  res.render('utilities', {
    idUser: res.locals.idUser,
    pageName: 'utilities'
  });
})

// forgot Password
router.get('/forgotPass', (req, res) => {
  res.render('forgotPass', {
    idUser: res.locals.idUser,
    pageName: 'forgotPass'
  });
});
router.get('/routines_login', (req, res) => {
  res.render('routines_login', {
    idUser: res.locals.idUser,
    pageName: 'routines_login'
  });
});
//RUTAS PRIVADAS O PROTEGIDAS
router.get('/hourglass', (req, res) => {
  if (req.session.idUser) { //si existe sesion
    res.render('hourglass', {
      idUser: res.locals.idUser,
      userName: res.locals.userName,
      pageName: 'routines'
    });
  } else {
    res.redirect('routines_login');
  }
})

//get fit
router.get('/get_fit', (req, res) => {
  if (req.session.idUser) { //si existe sesion
    res.render('get_fit', {
      idUser: res.locals.idUser,
      userName: res.locals.userName,
      pageName: 'routines'
    });
  } else {
    res.redirect('routines_login');
  }
})

//get shreded
router.get('/get_shreded', (req, res) => {
  if (req.session.idUser) { //si existe sesion
    res.render('get_shreded', {
      idUser: res.locals.idUser,
      userName: res.locals.userName,
      pageName: 'routines'
    });
  } else {
    res.redirect('routines_login');
  }
})



//user page
router.get('/user_page', (req, res) => {
  if (req.session.idUser) { //si existe sesion
    res.render('user_page', {
      idUser: res.locals.idUser,
      userName: res.locals.userName,
      pageName: 'user_page',
      nombre: res.locals.nombre,
      apellidos: res.locals.apel,
      edad: res.locals.edad,
      altura: res.locals.altura
    });
  } else {
    res.redirect('login_register');
  }
})

router.get('/user_progress', (req, res) => {
  if (req.session.idUser) { //si existe sesion
    const sql = 'select * from fotos_antes where idusuario = ?';
    conn.query(sql, [req.session.idUser], (err, result1) => {
      if (err) throw err;
      const sql2 = 'select * from fotos_despues where idusuario = ?';
      conn.query(sql2, [req.session.idUser], (err, result2) => {
        if (err) throw err;
        const sql3 = 'select fecha, peso from datos_calendario where idusuario=?';
        conn.query(sql3, [req.session.idUser], (err, result3) => {
          let fechas = [];
          let pesos = []
          for (let i = 0; i < result3.length; i++) {
            fechas.push(result3[i].fecha);
            pesos.push(result3[i].peso)
          };
          res.render('user_page_progreso', {
            idUser: res.locals.idUser,
            userName: res.locals.userName,
            pageName: 'user_page',
            nombre: res.locals.nombre,
            apellidos: res.locals.apel,
            edad: res.locals.edad,
            altura: res.locals.altura,
            imagenes1: result1,
            imagenes2: result2,
            fechas: fechas,
            pesos: pesos
          })
        })
      });
    })
  } else {
    res.redirect('login_register');
  }
})

export default router;