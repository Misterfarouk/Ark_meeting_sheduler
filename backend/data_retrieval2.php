 <?php
        require_once('meetingscheduler.php');


    //meeting topic data retrieval
        $tpc = "SELECT * FROM meeting_topic";
        
        $tpc_results =  mysqli_query( $connection, $tpc);
        $return_arr =  array();

        if( mysqli_num_rows($tpc_results) > 0 ){
            
            //output data
            while( $rows = mysqli_fetch_assoc($tpc_results) ){
                $return_arr[] = array( "id"=>$rows['id'], "topic"=>$rows['topic']);
            };
                $new_array[] = array("data"=>$return_arr);
                echo json_encode($return_arr) ;       
        }else{
            echo "data not found.";
        }

    ?>