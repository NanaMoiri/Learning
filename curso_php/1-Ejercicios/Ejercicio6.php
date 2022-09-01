<?php
echo "<table border='1'>"; //Inicio de la tabla

  $tabla = "Tabla del ";

  echo "<tr>";
  for ($i=1; $i <= 10 ; $i++) { 

    echo '<td>'. $tabla . $i . '</td>';

  }
  echo "</tr>";
  echo "<tr>";
  for ($i=1; $i <= 10; $i++) { 
    echo "<td>";
    for ($x=1; $x <= 10 ; $x++) { 
      echo "$i x $x = " . ($i*$x) . "<br>";
    }
  }
  echo "</tr>";

echo "</table>"; //Fin de la tabla
?>