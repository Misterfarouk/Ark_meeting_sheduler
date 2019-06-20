<?php
   
$selection = array(
    'Ademola Ogunyemi', 'Halima Salawu',
    'Atoro Busayo', 'Shonibare Oluwatimileyin',
    
);

//Print out the array in a JSON format.
header('Content-Type: application/json');
echo json_encode($selection);

?>