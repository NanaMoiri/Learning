<?php
if(isset($_POST['submit'])) {

    require_once 'includes/connection.php';

    //Recogemos los valores del formulario de registro
    $name = isset($_POST['name']) ? mysqli_real_escape_string($db, $_POST['name']) : false;
    $surname = isset($_POST['surname']) ? mysqli_real_escape_string($db, $_POST['surname']) : false;
    $email = isset($_POST['email']) ? mysqli_real_escape_string($db, $_POST['email']) : false;
    $password = isset($_POST['pass']) ? mysqli_real_escape_string($db, $_POST['pass']) : false;

    //ARRAY ERRORES
    $errors = array();

    //Validar la info antes de guardarla en la DB
    //validar nombre
    if(!empty($name) && !is_numeric($name) && !preg_match("/[0-9]/", $name)){
        $valid_name = true;
    } else {
        $valid_name = false;
        $errors['name'] = "El nombre no es válido";
    }
    //validar apellido
    if(!empty($surname) && !is_numeric($surname) && !preg_match("/[0-9]/", $surname)){
        $valid_surname = true;
    } else {
        $valid_surname = false;
        $errors['surname'] = "El apellido no es válido";
    }
    //validar email
    if(!empty($email) && filter_var($email, FILTER_VALIDATE_EMAIL)){
        $valid_email = true;
    } else {
        $valid_email = false;
        $errors['email'] = "El email no es válido";
    }
    //contraseña
    if(!empty($password)){
        $valid_password = true;
    } else {
        $valid_password = false;
        $errors['pass'] = "La contraseña esta vacía";
    }

    //INSERTAR EN LA DB
    $save_user = false;
    if(count($errors) == 0) {
        //Comprobamos si el array de errores está vacío con el COUNT
        $save_user = true;
        //cifrar la contraseña
        $crypted_password = password_hash($password, PASSWORD_BCRYPT, ['cost' => 4]);

        //INSERTAMOS EL USUARIO EN LA DB
        $sql = "INSERT INTO users VALUES(null, '$name', '$surname', '$email', '$crypted_password', CURRENT_TIMESTAMP());";
        $save = mysqli_query($db, $sql);

        if($save){
            $_SESSION['success'] = "The sign up has succed";
        } else {
            $_SESSION['errors']['general'] = "Fail to save the User in the DB";
        }

    } else {
        $_SESSION['errors'] = $errors;

    }

}

header('Location: register.php');