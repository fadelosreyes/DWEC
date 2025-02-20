<?php
header('Content-Type: application/json'); 

$ciudades = ["Madrid", "Barcelona", "Valencia", "Sevilla", "Zaragoza", "Málaga", "Murcia", "Palma", "Bilbao", "Alicante"];
// Verifica si el parámetro query está presente en la URL, si esta presente el valor se asigna ocmo minuscula sino se guarda como cadena vacia  
$query = isset($_GET['query']) ? strtolower($_GET['query']) : '';

// Filtramos las ciudades que empiezan con el query
$sugerencias = array_filter($ciudades, function($ciudad) use ($query) {
    return strpos(strtolower($ciudad), $query) === 0;  // Busca coincidencias que empiecen con el query
});

// Retornamos el resultado en formato JSON
echo json_encode(array_values($sugerencias));  // Array de sugerencias en formato JSON
?>
    