<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    /**
     *  The request is using the POST method. You can use the GET method.
     */
    $response['success'] = true;
    $response['test'] = $_REQUEST['edit-element-2'];
    echo json_encode($response);
}