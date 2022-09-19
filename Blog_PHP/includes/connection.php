<?php

$server = 'localhost';
$username = 'root';
$passowrd = '';
$database = 'proyecto_1_php';
$db = mysqli_connect($server, $username, $passowrd, $database);

mysqli_query($db, "SET NAMES 'utf8'");

// if(mysqli_connect_errno()) {
//     echo "La conexion a la base de datos a fallado: ".mysqli_connect_error();
//    } else {
//     echo "Conexion realizada correctamente <hr>";
//    }

//Iniciar sesion

// session_start();