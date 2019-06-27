<?php

    require_once('meetingscheduler.php');

    $topic_filter = "SELECT * FROM staff_to_topic WHERE staff_id=2";

    $topic_results = mysqli_query( $connection, $topic_filter);
    $return_arr =  array();

    if( mysqli_num_rows($topic_results) > 0 ){
            
        //output data
        while( $rows = mysqli_fetch_assoc($topic_results) ){
            $return_arr[] = array( "id"=>$rows['id'], "staff_id"=>$rows['staff_id'], "topic_id"=>$rows['topic_id']);
        };
            $new_array[] = array("data"=>$return_arr);
            echo json_encode($return_arr) ;       
    }else{
        echo "data not found.";
    }
?>