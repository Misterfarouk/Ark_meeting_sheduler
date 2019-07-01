<?php

require_once('./backend/meetingscheduler.php');

    if(isset($_POST['submit'])){
        $staff_name = $_POST['staff_name'];
        $meeting_topics = $_POST['meeting_topics'];
        $meeting_time = $_POST['meeting_time'];
    }

    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        if ($staff_name == null || $staff_name == "") {
          $staff_nameErr = "Staff Name is required";
        } else {
          $staff_name = test_input($staff_name);
        }
      
        if ($meeting_topics == null || $meeting_topics == "") {
            $meeting_topicsErr = "meeting topic is required";
          } else {
            $meeting_topics = test_input($meeting_topics);
          }
      
        if ($meeting_time == null || $meeting_time == "") {
            $meeting_timeErr = "meeting time is required";
          } else {
            $meeting_time = test_input($meeting_time);
        }
        if (empty($staff_nameErr) && empty($meeting_topicsErr) && empty($meeting_timeErr)) 
        {
            $sql = "INSERT INTO bookings (staff_name, meeting_topics, meeting_time)
            VALUES ( '$staff_name', '$meeting_topics', '$meeting_time')";
        
            if (mysqli_query($connection, $sql)) {
              http_response_code(200);
              echo "Your meeting has been booked!";
            } else {
              http_response_code(400);
              echo "Error: " . $sql . "<br>" . mysqli_error($connection);
            }
        }  else {
          $arr = array('staff_name' => $staff_nameErr, 'meeting_topics' => $meeting_topicsErr, 'meeting_time' => $meeting_timeErr, "status" => 400);
          http_response_code(400);
          echo json_encode( $arr );
        }
          
      };

?>


<!-- console.log -->