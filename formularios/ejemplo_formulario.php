<?php
// Obtener los datos del formulario
$nombre = $_POST['nombre'] ?? '';
$email = $_POST['email'] ?? '';
$mensaje = $_POST['mensaje'] ?? '';

// Realizar alguna operación o procesamiento con los datos
$respuesta = "¡Formulario recibido! Nombre: {$nombre}, Correo: {$email}, Mensaje: {$mensaje}";

// Devolver la respuesta como salida
echo $respuesta;
?>
