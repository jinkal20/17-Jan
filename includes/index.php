<?php
include 'function.php';
    // pass the connection and the movie id to a function
    if(isset($_GET['users'])){
        $data = get_single_user($conn,$_GET['users']);
        echo json_encode($data);
    }
    else{
        $data_get_all_users($conn);
        echo json_encode($data);
    }
?>