<?php
    $server = "localhost";
    $username = "root";
    $password = "";
    $database = "meeting_scheduler";

    //create connection

    $connection = mysqli_connect( $server, $username, $password, $database);

    // Check connection
    if (!$connection) {
    die("Connection failed: " . mysqli_connect_error());
    }

?>