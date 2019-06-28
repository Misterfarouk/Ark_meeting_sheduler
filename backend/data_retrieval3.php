<?php
        require_once('meetingscheduler.php');

    $time_selection =  $_POST['time_selection'];
    //meeting time data retrieval
    
    $time_filter = "SELECT staff_selection.id , meeting_time.time  FROM staff_selection INNER JOIN meeting_time ON staff_selection.staff_id = meeting_time.id WHERE staff_id = '" . $time_selection ."'";
    
    $time_filter =  mysqli_query( $connection, $time);
    $return_arr =  array();

    if( mysqli_num_rows($time_filter) > 0 ){
        
        //output data
        while( $rows = mysqli_fetch_assoc($time_filter) ){
            $return_arr[] = array( "id"=>$rows['id'], "time"=>$rows['time']);
        };
            $new_array[] = array("data"=>$return_arr);
            echo json_encode($return_arr) ;       
    }else{
        echo "data not found.";
    }

?>