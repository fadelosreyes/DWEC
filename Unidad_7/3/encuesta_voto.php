<?php
$archivo = "resultados.txt";

$opciones = ["Real Madrid", "Barcelona", "Cádiz", "Celta"];

// Leer el contenido del archivo y separar los votos en un array
$votos = explode("||", file_get_contents($archivo));

// Si se recibe un voto, se incrementa la opcion correspondiente
if (isset($_GET['voto'])) {
    $voto = intval($_GET['voto']) - 1; // Convierte en un indice de array al restatrle uno
    if ($voto >= 0 && $voto < 4) { // Validar que la opcion sea correcta
        $votos[$voto]++; 
        file_put_contents($archivo, implode("||", $votos)); // Guardar los votos actualizados
    }
}

// Calcular el total de votos y los porcentajes
$total = array_sum($votos);
$resultado = "";
for ($i = 0; $i < 4; $i++) {
    $porcentaje = $total ? round(($votos[$i] / $total) * 100, 2) : 0; // Calcula el porcentaje de votos de un elemento, si es null le suma 0
    $resultado .= $opciones[$i] . ": $votos[$i] votos ($porcentaje%)<br>";
};

echo $resultado;
?>
