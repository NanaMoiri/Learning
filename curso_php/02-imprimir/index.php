<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Imprimir por pantalla</title>
</head>
<body>
  <h1>Master en PHP</h1>
  <?= "Esto es en si mismo un atajo para el echo"?>
  <?php
    //comentario de codigos para PHP 

    /*
    COMENTARIO
    MULTI
    LINEA
     */
    
    echo '<h3>Listado de videojuegos</h3>';
    echo '<ul>'
          .'<li>GTA</li>'
          .'<li>LOTR</li>'
          .'<li>Guild Wars 2</li>'
          .'</ul>';
    echo '<p> Esta es toda'. "-" . 'la cadena';

  ?>

</body>
</html>

