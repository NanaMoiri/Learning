<?php

//Ejercicio 2. 
// 1-Función
// 2- Validar un email con filter_var
// 3- Recoger una variable por get y validarla
// 4- mostrar el resultado

function validarEmail($email){
  $status = "No valido";
  if(!empty($email) && filter_var($email, FILTER_VALIDATE_EMAIL)){
    $status = "Válido";
  }
  return $status;
}

if(isset($_GET['email'])){

  echo validarEmail($_GET['email']);

}else {

  echo "Passa por get un email";
  
}