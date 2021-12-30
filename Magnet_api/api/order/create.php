<?php
    //Headers
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    header('Access-Control-Allow-Methods: POST');
    header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Access-Control-Allow-Methods,Content-Type, Authorization, X-Requested-With');

    include_once '../../config/Database.php';
    include_once '../../models/Order.php';

    //Instantiate DB & Connect
    $database = new Database();
    $db = $database->connect();


    //Instantiate order object
    $order = new Order($db);

    // Get raw posted data
    $data = json_decode(file_get_contents("php://input"));

    // Bind data
    $order->client = $data->firstClient . " " . $data->lastClient; 
    $order->cinClient = $data->cinClient;
    $order->emailClient = $data->emailClient;
    $order->addressClient = $data->addressClient;
    $order->reciever = $data->firstReciever . " " . $data->lastReciever;
    $order->cinReciever = $data->cinReciever;
    $order->emailReciever = $data->emailReciever;
    $order->addressReciever = $data->addressReciever;
    $order->telClient = $data->telClient;
    $order->telReciever = $data->telReciever;
    $order->ref = $data->ref;
    $order->prix = $data->price . " TND";
    $order->date = $data->date;
    $order->status = $data->status;

    // Create order
    if ($order->create()) {
        echo json_encode(
            array('message'=> 'Order added successfully!')
        );
    } else {
        echo json_encode(
            array('message'=> 'Order add operation failed!')
        );
}
    