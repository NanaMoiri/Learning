<?php
    require_once 'includes/header.php';
?>
    <!--Caja principal-->
    <div id="main_page">

       <h1>Registro</h1>
       <form action="register_save.php" method="POST">
            <label for="name">Nombre</label>
            <input type="text" name="name">

            <label for="surname">Apellido</label>
            <input type="text" name="surname">

            <label for="email">Correo Electrónico</label>
            <input type="email" name="email">

            <label for="pass">Contraseña</label>
            <input type="password" name="pass">

            <input type="submit" value="Registrar" name="submit">
       </form>
    </div>

    <!--Barra lateral-->
    <?php require_once 'includes/aside_bar.php'; ?>

    <!--Pie de página-->
    <?php require_once 'includes/footer.php';?>
