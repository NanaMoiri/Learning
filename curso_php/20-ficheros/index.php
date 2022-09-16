<?php

// // 1-Abrir archivo

// $archivo = fopen("fichero_texto.txt", "a+");

// // 2-Leer contenido -- Solo lee la primera línea, para leerlo entero hay que recorrerlo con un while

// while(!feof($archivo)){
//   $contenido = fgets($archivo);

//   echo $contenido."<br/>";
  
// }

// // 3-Escribir en un archivo

// fwrite($archivo, "soy un texto añadido desde PHP");

// // 4-Cerrar archivo

// fclose($archivo);


// 5-Copiar
// copy('fichero_texto.txt', 'fichero_copiado.txt') or die("error al copiar el fichero");

// 6-Renombrar
// rename("fichero_copiado.txt",'archivito_recopiadito.txt');

// 7- Eliminar fichero

// unlink('archivito_recopiadito.txt') or die ("Error al borrar");

// 8-Comprobar si existe un archivo.
if(file_exists("fichero_texto.txt")){
  echo "El archivo existe";
} else {
  echo "El archivo no existe";
}