<?php

// session_start();

// if(isset($_POST['submit'])) {
//     //Recogemos los valores del formulario de registro
//     $name = isset($_POST['name']) ? $_POST['name'] : false;
//     $surname = isset($_POST['surname']) ? $_POST['surname'] : false;
//     $email = isset($_POST['email']) ? $_POST['email'] : false;
//     $password = isset($_POST['pass']) ? $_POST['pass'] : false;

    // //Validar la info antes de guardarla en la DB
    // //validar nombre
    // if(!empty($name) && !is_numeric($name) && !preg_match("/[0-9]/", $name)){
    //     $valid_name = true;
    // } else {
    //     $valid_name = false;
    //     $errors['name'] = "El nombre no es válido";
    // }
    // //validar apellido
    // if(!empty($surname) && !is_numeric($surname) && !preg_match("/[0-9]/", $surname)){
    //     $valid_surname = true;
    // } else {
    //     $valid_surname = false;
    //     $errors['surname'] = "El apellido no es válido";
    // }
    // //validar email
    // if(!empty($email) && filter_var($email, FILTER_VALIDATE_EMAIL)){
    //     $valid_email = true;
    // } else {
    //     $valid_email = false;
    //     $errors['email'] = "El email no es válido";
    // }
    // //contraseña
    // if(!empty($password)){
    //     $valid_password = true;
    // } else {
    //     $valid_password = false;
    //     $errors['pass'] = "La contraseña esta vacía";
    // }

    // $save_user = false;
    // //INSERTAR EN LA DB
    // if(count($errors) == 0) {
    //     //Comprobamos si el array de errores está vacío con el COUNT
    //     $save_user = true;
        
    // } else {
    //     $_SESSION['errors'] = $errors;
    //     header('Location: register.php');
    // }

//}
