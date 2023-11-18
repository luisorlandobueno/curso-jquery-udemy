<?php 


$datos = array(

    'nombre' => 'luis',
    'edad' => 33,
    'pais' => 'peru'

);

header('Content-Type: application/json');

echo json_encode($datos)



?>