<?php 

/*Ejercicio 4. Recoger dos numeros por la URL y hacer todas las operaciones básicas de una calculadora */
if (isset($_GET['numero1']) && isset($_GET['numero2'])) {

  $numero1 = $_GET['numero1'];
  $numero2 = $_GET['numero2'];

  echo 'Suma: '.($numero1+$numero2).'<br>';
  echo 'Resta: '.($numero1-$numero2).'<br>';
  echo 'Multiplicación: '.($numero1*$numero2).'<br>';
  echo 'Division: '.($numero1%$numero2).'<br>';
} else {
  echo "Introduce correctamente los valores por la url";
}
?>