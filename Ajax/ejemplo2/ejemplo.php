<?php
// Ejemplo de archivo PHP para la solicitud AJAX con parámetros GET

// Obtener el valor del parámetro enviado por GET
$parametro = $_GET['parametro'] ?? '';

// Realizar alguna operación o procesamiento con el parámetro
$mensaje = "¡La solicitud AJAX con parámetro '{$parametro}' fue exitosa!";

// Devolver el mensaje como respuesta
echo $mensaje;
?>