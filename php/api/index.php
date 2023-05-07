<?php

//Allowing access from websevers to application
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');

$db_host = "eu-cdbr-west-03.cleardb.net";
$db_user = "bece1970f3fe5b";
$db_pass ="b24c011d";
$db_name = "heroku_8c69a3155a75dd3";

$conn = new mysqli($db_host, $db_user, $db_pass, $db_name);


if(mysqli_connect_error()){
  echo mysqli_connect_error();
  exit();
}
else{
    //Creating a method variable and getting the information in an array and getting the request method to access the page
    $method = $_SERVER["REQUEST_METHOD"];
    //Calling the switch statement which is a collection of if statements depending on the method called
    switch($method) {
      //If the method is GET then this will be carried out  
        case "GET":
            //Setting a sql variable to an SQL statement
            $sql = "SELECT * FROM flashcards";
            //Storing the sql statement using the prepare function
            $stmt = $conn->prepare($sql);
            //Executing the SQL statement
            $stmt->execute();
            //Fetching all the results from the SQL query
            $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
            //Encoding the data into json format
            echo json_encode($users);
            //breaking the switch statement
            break;

        
        //if the method is POST then this will be carried out
        case "POST":
          
          //Creating a variable user by decoding the json format into php and getting the contents
          $user = json_decode( file_get_contents("php://input") );
          //Creating a SQL variable with an sql statement
          $sql = "INSERT INTO flashcards(deck_id, deck_name, deck_info, flash_id, flash_question, flash_answer, option_1, option_2, option_3, option_4, category) VALUES(null, :deck_name, :deck_info, :flash_id, :flash_question, :flash_answer, :option_1, :option_2, :option_3, :option_4, :category)";
           //Storing the sql statement using the prepare function
          $stmt = $conn->prepare($sql);
          //Binding the inputs to the correct sql field using bindParam
          $stmt->bindParam(":deck_name", $user->deck_name);  
          $stmt->bindParam(":deck_info", $user->deck_info);  
          $stmt->bindParam(":flash_id", $user->flash_id);  
          $stmt->bindParam(":flash_question", $user->flash_question);  
          $stmt->bindParam(":flash_answer", $user->flash_answer);  
          $stmt->bindParam(":option_1", $user->option_1);
          $stmt->bindParam(":option_2", $user->option_2);
          $stmt->bindParam(":option_3", $user->option_3);
          $stmt->bindParam(":option_4", $user->option_4);
          $stmt->bindParam(":category", $user->category);
          //If statement to check if the statment variable was successfull
          if($stmt->execute()) {
            //Setting the response to an array with a status and message
            $response = ["status" => 1, "message" => "record created successfully."];
            
          }
          //If the statement variable was unsuccessfull then this statement will execute
          else {
              //Setting the response to an array with a status and message
               $response = "Please enter all fields";
              
               
              }
           //breaking the switch statement
       

           echo json_encode($response);
  }
}  
    ?>