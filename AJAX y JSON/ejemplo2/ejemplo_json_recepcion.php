<?php


$datos_json=file_get_contents("php://input");
$datos=json_decode($datos_json);

$respuesta =array(

    'mensaje'=> 'datos recibidos correctamente',
    'datos'=> $datos

);

header('Content-Type: application/json');

echo json_encode($respuesta);


?>