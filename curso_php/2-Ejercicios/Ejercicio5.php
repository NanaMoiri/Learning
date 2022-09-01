<?php

//Ejercicio 5- Crear un array con el contenido de la siguiente tabla:

//ACCION       AVENTURA        DEPORTE
//GTA     ASSASINS CREED        FIFA 19
//COD     PRINCE OF PERSIA      PES19
//PUBG    CRASH                 MOTO GP 19

//Cada fila debe ir en un fichero separado con includes

$juegos = [
  'ACCION'=> ['GTA', 'COD', 'PUBG'],
  'AVENTURA' => ['ASSASINS', 'PERSIA', 'CRASH'],
  'DEPORTE' => ['FIFA19', 'PES19', 'MOTOGP19']
];

$categorias = array_keys($juegos);

?>

<table border='1'>
  <?php require_once 'Ejercicio5/Encabezados.php'; ?>
  <?php require_once 'Ejercicio5/fila1.php'; ?>
  <?php require_once 'Ejercicio5/fila2.php'; ?>
  <?php require_once 'Ejercicio5/fila3.php'; ?>

