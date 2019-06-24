<?php
    require_once('meetingscheduler.php');

    $sql = "SELECT * FROM staff_selection";
    
    $results = mysqli_query( $connection, $sql);
    $return_arr =  array();

    if( mysqli_num_rows($results) > 0 ){
        
        //output data
        while( $rows = mysqli_fetch_assoc($results) ){
            $return_arr[] = array( "id"=>$rows['id'], "staff_name"=>$rows['staff_name']);
        };
            $new_array[] = array("data"=>$return_arr);
            echo json_encode($return_arr) ;
    }else{
        echo "data not found.";
    }


    //meeting topic data retrieval
    // $tpc = "SELECT * FROM meeting_topic";
    
    // $tpc_results =  mysqli_query( $connection, $tpc);
    // $return_arr =  array();

    // if( mysqli_num_rows($results) > 0 ){
        
    //     //output data
    //     while( $rows = mysqli_fetch_assoc($results) ){
    //         $return_arr[] = array( "id"=>$rows['id'], "topic"=>$rows['topic']);
    //     };
    //         $new_array[] = array("data"=>$return_arr);
    //         echo json_encode($return_arr) ;       
    // }else{
    //     echo "data not found.";
    // }

?>