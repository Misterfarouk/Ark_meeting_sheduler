<?php
   
$topic = array(
    'ZeoFoods', 'LoanBook',
    'TNB', 'ChefEros',
    
);

//Print out the array in a JSON format.
header('Content-Type: application/json');
echo json_encode($topic);

?>