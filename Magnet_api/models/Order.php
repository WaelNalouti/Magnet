<?php
    class Order {
        //DB connection vars
        private $conn;
        private $table = 'orders';

        //Order Properties
        public $id;
        public $client;
        public $cinClient;
        public $emailClient;
        public $addressClient;
        public $reciever;
        public $cinReciever;
        public $emailReciever;
        public $addressReciever;
        public $telClient;
        public $telReciever;
        public $ref;
        public $prix;
        public $date;
        public $status;

        //Constructor with DB
        public function __construct($db) {
            $this->conn = $db;
        }

        //Get Orders
        public function read() {
            $query = 'SELECT id,
            client, 
            cinClient,
            emailClient,
            addressClient,
            reciever,
            cinReciever,
            emailReciever,
            addressReciever ,
            telClient,
            telReciever,
            ref,
            prix,
            date,
            status
             FROM ' . $this->table;

            // Prepare Statement
            $stmt = $this->conn->prepare($query);

            // Execute the query
            $stmt->execute();

            return $stmt;
        }


         // Create Order
        public function create() {
            // Create query
            $query = 'INSERT INTO ' . $this->table . ' SET 
            client = :client, 
            cinClient = :cinClient, 
            emailClient = :emailClient, 
            reciever = :reciever, 
            cinReciever = :cinReciever, 
            emailReciever = :emailReciever, 
            telClient = :telClient, 
            telReciever = :telReciever, 
            ref = :ref, 
            prix = :prix,
            date = :date, 
            status = :status, 
            addressClient = :addressClient, 
            addressReciever = :addressReciever';

            // Prepare statement
            $stmt = $this->conn->prepare($query);

            // Sanitizing the data before send
            $this->client = htmlspecialchars(strip_tags($this->client));
            $this->cinClient = htmlspecialchars(strip_tags($this->cinClient));
            $this->telClient = htmlspecialchars(strip_tags($this->telClient));
            $this->emailClient = htmlspecialchars(strip_tags($this->emailClient));
            $this->addressClient = htmlspecialchars(strip_tags($this->addressClient));
            $this->reciever = htmlspecialchars(strip_tags($this->reciever));
            $this->cinReciever = htmlspecialchars(strip_tags($this->cinReciever));
            $this->telReciever = htmlspecialchars(strip_tags($this->telReciever));
            $this->emailReciever = htmlspecialchars(strip_tags($this->emailReciever));
            $this->addressReciever = htmlspecialchars(strip_tags($this->addressReciever));
            $this->ref = htmlspecialchars(strip_tags($this->ref));
            $this->prix = htmlspecialchars(strip_tags($this->prix));
            $this->date = htmlspecialchars(strip_tags($this->date));
            $this->status = htmlspecialchars(strip_tags($this->status));

            // Bind data from req.params.query
            $stmt->bindParam(':client', $this->client);
            $stmt->bindParam(':cinClient', $this->cinClient);
            $stmt->bindParam(':telClient', $this->telClient);
            $stmt->bindParam(':emailClient', $this->emailClient);
            $stmt->bindParam(':addressClient', $this->addressClient);
            $stmt->bindParam(':reciever', $this->reciever);
            $stmt->bindParam(':cinReciever', $this->cinReciever);
            $stmt->bindParam(':telReciever', $this->telReciever);
            $stmt->bindParam(':emailReciever', $this->emailReciever);
            $stmt->bindParam(':addressReciever', $this->addressReciever);
            $stmt->bindParam(':ref', $this->ref);
            $stmt->bindParam(':prix', $this->prix);
            $stmt->bindParam(':date', $this->date);
            $stmt->bindParam(':status', $this->status);

            // Execute query
            if($stmt->execute()) {
                return true;
        }

        // Print error if something goes wrong
        printf("Error: %s.\n", $stmt->error);

        return false;
        }

    }