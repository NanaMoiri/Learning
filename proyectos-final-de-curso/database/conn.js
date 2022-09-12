import { createConnection } from "mysql";

const conn = createConnection({
    host:'localhost',
    user: 'root',
    password: '',
    database: 'fitnesdotcom'
})

conn.connect( err =>{
    if (err) {throw err;}
    console.log("Conexión a la Base de datos establecida");
});

export default conn;