<?php

    require_once('meetingscheduler.php');

    $staff_selection =  $_POST['staff_selection'];
    
    $topic_filter = "SELECT staff_to_topic.id , meeting_topic.topic  FROM staff_to_topic INNER JOIN meeting_topic ON staff_to_topic.topic_id = meeting_topic.id WHERE staff_id = '" . $staff_selection ."'";

    $topic_results = mysqli_query( $connection, $topic_filter);
    $return_arr =  array();

    if( mysqli_num_rows($topic_results) > 0 ){
            
        //output data
        while( $rows = mysqli_fetch_assoc($topic_results) ){
            $return_arr[] = array( "id"=>$rows['id'], "topic"=>$rows['topic']);
        };
            $new_array[] = array("data"=>$return_arr);
            echo json_encode($return_arr) ;       
    }else{
        echo "data not found.";
    }

?>