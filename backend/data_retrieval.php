<?php
    require_once('meetingscheduler.php');

    $sql = "SELECT * FROM staff_selection";
    $results = mysqli_query( $connection, $sql);

    if( mysqli_num_rows($results) > 0 ){
        
        //output data
        while( $rows = mysqli_fetch_assoc($results) ){
            echo $rows;
        }
    }else{
        echo "data not found.";
    }

?>