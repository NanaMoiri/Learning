<?php
//Ejercicio 2- Añadir valores a un array mientras que su longitud sea menor a 120 y mostrarlo por pantalla.

$array = [];

  for ($i=0; $i <= 120 ; $i++) { 
    array_push($array, $i);
  }

var_dump($array);

?>