//Imports
import express from 'express';
import session from 'express-session';
import fileUpload from 'express-fileupload';
import path from 'path' // Esto soluciona el "__dirname" con el import
import { fileURLToPath } from 'url'; // Esto soluciona el "__dirname" con el import
import viewsRoutes from './routes/views.routes.js';
import contactRoutes from './routes/contact.routes.js';
import usersRoutes from './routes/user.routes.js';
import userPageRoutes from './routes/user_page.routes.js';
import progressRoutes from './routes/progress.routes.js';

//Inicializaciones
const app = express()
const __dirname = path.dirname(fileURLToPath(import.meta.url)); // Esto soluciona el "__dirname" con el import

//Configuraciones
app.set('port', 3000);
app.set('view engine', 'ejs'); //configuracion EJS
app.set('views', __dirname + '/views'); //configuracion EJ / Static files folder

//Middlewares
//session
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true
  })
);
//los datos podrás ser accesibles desde cualquier plantilla
app.use((req, res, next) => {
  res.locals.idUser = req.session.idUser;
  res.locals.userName = req.session.userName;
  res.locals.userEmail = req.session.userEmail;
  res.locals.nombre = req.session.nombre;
  res.locals.apel = req.session.apel;
  res.locals.edad = req.session.edad;
  res.locals.altura = req.session.altura;
  next();
});

app.use(express.static(__dirname + '/public'));// para los static files
app.use(express.static(__dirname + '/uploads'));//static files uploads
app.use(express.json()); //para usar los archivos json ('fetch')
app.use(fileUpload({ createParentPath:true })); // file Upload
app.use(viewsRoutes, contactRoutes, usersRoutes, userPageRoutes, progressRoutes);
app.use((req, res) => {
  res.status(404).render('404');
 });

export default app;