<?php
    //Headers
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');

    include_once '../../config/Database.php';
    include_once '../../models/Order.php';

    //Instantiate DB & Connect
    $database = new Database();
    $db = $database->connect();


    //Instantiate order object
    $order = new Order($db);

    //Orders query
    $result = $order->read();

    $nbr = $result->rowCount();

    //Check if any orders
    if ($nbr > 0){
        //Order array
        $orders_arr = array();
        $orders_arr['data'] = array();

        // Fetch data as associated array
        while($row = $result->fetch(PDO::FETCH_ASSOC)) {
            extract($row);
            $order_item = array(
                'id' => $id,
                'client' => $client,
                'cinClient' => $cinClient,
                'emailClient' => $emailClient,
                'addressClient' => $addressClient,
                'reciever' => $reciever,
                'cinReciever' => $cinReciever,
                'emailReciever' => $emailReciever,
                'addressReciever' => $addressReciever,
                'telClient' => $telClient,
                'telReciever' => $telReciever,
                'ref' => $ref,
                'prix' => $prix,
                'date' => $date,
                'status' => $status
            );
            // Push to "data"
            array_push($orders_arr['data'], $order_item);
        }

        // Turn response to JSON & output
        echo json_encode($orders_arr);
    } else {
        //No orders
        echo json_encode(array('message' => 'No Orders Found!'));
    }