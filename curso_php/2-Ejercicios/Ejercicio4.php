<?php

//Ejercicio 4- Crear un script en php que tenga 4 variables, una de tipo array, otra de tipo string, int y otra booleana y que imprima un mensaje segun el tipo de variable que sea.

$array = [1,2,3,4,5,6,7,8,9,10];

$texto = 'Hola soy el string';

$integro = 125;

$booleana = true;

if(is_array($array)){
  echo "El array es un array";
} 

if (is_string($texto)) {
  echo "$texto";
}

if (is_int($integro)) {
  echo "El $integro es un integro";
}

if (is_bool($booleana)) {
  echo " $booleana es bool";
}

?>