<?php
$mensaje = $_GET['mensaje'] ?? 'Mensaje por defecto';

// Realizar alguna operación o procesamiento con el parámetro
$respuesta = "El servidor dice: '{$mensaje}'";

// Devolver la respuesta como salida
echo $respuesta;
?>