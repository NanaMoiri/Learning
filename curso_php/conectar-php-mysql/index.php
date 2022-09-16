<?php

 //conectar a la base de datos

 $conexion = mysqli_connect("localhost","root","","phpmysql");

 //comprobar conexion

 if(mysqli_connect_errno()) {
  echo "La conexion a la base de datos a fallado: ".mysqli_connect_error();
 } else {
  echo "Conexion realizada correctamente <hr>";
 }

 // Consulta para configurar la codificación de carácteres

 mysqli_query($conexion, "SET NAMES 'utf8'");

 //consulta SELECT desde php

 $query = mysqli_query($conexion, "SELECT * FROM NOTAS" );

//  $notas = mysqli_fetch_assoc($query);

 while($nota = mysqli_fetch_assoc($query)){
  echo '<pre>'.var_dump($nota).'</pre>';
  // echo $nota['descripcion'].'<br/>'; para ver un parametro concreto del array
 }

 //Insertar en la base de datos desde PHP
 $sql = "INSERT INTO NOTAS VALUES(null, 'Nota 3', 'Nota insertada desde PHP', 'blue')";
 $insert = mysqli_query($conexion, $sql);

 if($insert){
  echo "Datos insertados correctamente";
 } else {
  echo "ERROR: ".mysqli_error($conexion);
 }

