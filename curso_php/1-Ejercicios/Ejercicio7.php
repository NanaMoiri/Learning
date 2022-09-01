<?php
//Ehercicio 7. Hacer un programa que muestre todos los números impares entre dos números que nos lleguen por la URL ($_GET) 

if (isset($_GET['numero1']) && isset($_GET['numero2'])){

  $numero1 = $_GET['numero1'];
  $numero2 = $_GET['numero2'];

  if($numero1 < $numero2){
    for($numero1; $numero1 <= $numero2; $numero1++) {

      $numero1 = $numero1++;

      if ($numero1%2 != 0){
        echo "$numero1 <br>";
      }
    }
  } else {
    echo "El numero $numero1 es mayor que el numero $numero2";
  }

}else{
  echo "Introduce correctamente los valores por la url";
}


?>