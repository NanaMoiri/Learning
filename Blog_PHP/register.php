<?php
    require_once 'includes/header.php';
    require_once 'includes/helpers.php';
?>
<!--Caja principal-->
<div id="main_page">
    <div id="register">
        <?php if(isset($_SESSION['success'])) : ?>
            <div class="alert success-alert">
                <?=$_SESSION['success']; ?>
            </div>
        <?php elseif(isset($_SESSION['errors']['general'])): ?>
            <div class="alert success-error">
                <?=$_SESSION['errors']['general']; ?>
            </div>
        <?php endif ?>
        <h1>Registro</h1>
        <form action="register_save.php" method="POST">
            <label for="name">Nombre</label>
            <input type="text" name="name">
            <?php echo isset($_SESSION['errors']) ? showError($_SESSION['errors'], 'name') : ''; ?>

            <label for="surname">Apellido</label>
            <input type="text" name="surname">
            <?php echo isset($_SESSION['errors']) ? showError($_SESSION['errors'], 'surname') : ''; ?>

            <label for="email">Correo Electrónico</label>
            <input type="email" name="email">
            <?php echo isset($_SESSION['errors']) ? showError($_SESSION['errors'], 'email') : ''; ?>

            <label for="pass">Contraseña</label>
            <input type="password" name="pass">
            <?php echo isset($_SESSION['errors']) ? showError($_SESSION['errors'], 'pass') : ''; ?>

            <input type="submit" value="Registrar" name="submit">
        </form>
        <?php eraseErrors(); ?>
    </div>
</div>

<!--Barra lateral-->
<?php require_once 'includes/aside_bar.php'; ?>

<!--Pie de página-->
<?php require_once 'includes/footer.php';?>