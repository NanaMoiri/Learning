<?php

function showError($errors, $field) {
    $alert = "";
    if(isset($errors[$field]) && !empty($field)){
        $alert = "<div class='alert error-alert'>".$errors[$field].'</div>';
    }
    return $alert;
}

function eraseErrors() {
    if(isset($_SESSION['errors'])){
    $_SESSION['errors'] = null;
    unset($_SESSION['errors']);
    }
    
    if(isset($_SESSION['success'])){
        $_SESSION['success'] = null;
        unset($_SESSION['success']);
    }
}