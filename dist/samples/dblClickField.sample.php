<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    /**
     *  The request is using the POST method. You can use the GET method.
     */
    $response['success'] = true;
    $response['test'] = $_REQUEST['e2'];
    if(!$response['success']){
        $response['errorMessage'] = "This is sample errorMessage";
    }
    echo json_encode($response);
}