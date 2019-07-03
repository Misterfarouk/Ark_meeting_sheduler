<?php

require_once('meetingscheduler.php');

    $name = $_POST['name'];
    $email = $_POST['email'];
    $staff_name = $_POST['staff_selection'];
    $meeting_topic = $_POST['topic_selection'];
    $meeting_time = $_POST['meeting_time'];

    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        // if ($staff_name == null || $staff_name == "") {
        //   $staff_nameErr = "Staff Name is required";
        // } else {
        //   $staff_name = test_input($staff_name);
        // }
      
        // if ($meeting_topic == null || $meeting_topic == "") {
        //     $meeting_topicErr = "meeting topic is required";
        //   } else {
        //     $meeting_topic = test_input($meeting_topic);
        //   }
      
        // if ($meeting_time == null || $meeting_time == "") {
        //     $meeting_timeErr = "meeting time is required";
        //   } else {
        //     $meeting_time = test_input($meeting_time);
        // }
        // if (empty($staff_nameErr) && empty($meeting_topicErr) && empty($meeting_timeErr)) 
        // {
            $sql = "INSERT INTO bookings ( name, email, staff_name, meeting_topic, meeting_time)
            VALUES ( '$name', '$email' ,'$staff_name', '$meeting_topic', '$meeting_time')";
        
            if (mysqli_query($connection, $sql)) {
              http_response_code(200);
              echo "Your meeting has been booked!";
            } else {
              http_response_code(400);
              echo "Error: " . $sql . "<br>" . mysqli_error($connection);
            }
        }  else {
          $arr = array( 'name' => $nameErr, 'email' => $emailErr, 'staff_name' => $staff_selectionErr, 'meeting_topic' => $topic_selectionErr, 'meeting_time' => $meeting_timeErr, "status" => 400);
          http_response_code(400);
          echo json_encode( $arr );
        }
          

?>


<!-- console.log -->