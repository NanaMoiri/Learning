<?php

/* 
Ejercicio 5. Hacer un programa que muestre todos los numeros entre dos numeros que nos lleguen por la URL con el $_GET
*/

if (isset($_GET['numero1']) && isset($_GET['numero2'])){

  $numero1 = $_GET['numero1'];
  $numero2 = $_GET['numero2'];

  if($numero1 < $numero2){
    for($numero1; $numero1 <= $numero2; $numero1++) {

      $numero1 = $numero1++;
  
      echo "$numero1 <br>";
    }
  } else {
    echo "El numero $numero1 es mayor que el numero $numero2";
  }

}else{
  echo "Introduce correctamente los valores por la url";
}

?>