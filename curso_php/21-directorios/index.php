<?php

//borrar directorios

rmdir('mi_carpeta');

//para crear un directorio o carpeta
if(!is_dir('mi_carpeta')){
  mkdir('mi_carpeta', 0777) or die("no se puede crear la carpeta");
}else {
  echo "Ya existe la carpeta";
}

//Abrir el directorio
echo '<hr/>';
if($gestor = opendir('./mi_carpeta')){
  while(false !== ($archivo = readdir($gestor))){
    if($archivo != '.' && $archivo != '..'){
      echo $archivo."<br/>";
    }

  }
}

