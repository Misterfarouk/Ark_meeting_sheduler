<?php
        require_once('meetingscheduler.php');


    //meeting time data retrieval
        $time = "SELECT * FROM meeting_time";
        
        $time_results =  mysqli_query( $connection, $time);
        $return_arr =  array();

        if( mysqli_num_rows($time_results) > 0 ){
            
            //output data
            while( $rows = mysqli_fetch_assoc($time_results) ){
                $return_arr[] = array( "id"=>$rows['id'], "time"=>$rows['time']);
            };
                $new_array[] = array("data"=>$return_arr);
                echo json_encode($return_arr) ;       
        }else{
            echo "data not found.";
        }

    ?>