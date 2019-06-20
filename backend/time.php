<?php
   
$time = array(
    '8:00-9:00', '9:00-10:00',
    '10:00-11:00', '11:00-12:00',
    
);

//Print out the array in a JSON format.
header('Content-Type: application/json');
echo json_encode($time);

?>