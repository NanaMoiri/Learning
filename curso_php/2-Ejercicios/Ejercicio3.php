<?php

//Ejercicio 3- Programa que compruebe si una variable esta vacia y si esta vacia rellenarla con texto en minuscula y mostrarlo en mayusculas y negrita.

$variable = "";

if($variable == null) {
  $variable = "texto para la variable";
  $variable = strtoupper($variable);
  echo '<b>'.$variable.'</b>';
} else {
  echo "La variable ya tiene contenido";
}

?>