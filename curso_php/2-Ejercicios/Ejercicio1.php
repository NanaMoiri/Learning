<?php
//Ejercicio 1- Hacer un programa en PHP que tenga un array con 8 numeros enteros y que : 
//- Lo recorra y lo muestre
//-Lo ordene y lo muestre
//- Mostrar su longitud
//-Busque algun elemento

$numeros = [10, 20, 35, 46, 57, 88, 94, 32];

function mostrarResultado($numeros){
  $resultado = "";
  echo '<ul>';
  foreach ($numeros as $numero) {
    echo '<li>'.$numero.'</li>';
  }
  echo '</ul>';
  }

mostrarResultado($numeros);

echo '<hr>';

sort($numeros);

mostrarResultado($numeros);


echo '<hr>';

$longitud = count($numeros);
echo $longitud;

echo '<hr>';

$busqueda = array_search(32, $numeros);
var_dump($busqueda);
echo $busqueda;
?>