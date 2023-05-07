<?php

    //Allowing access from websevers to application
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST");
    header("Access-Control-Allow-Headers: Content-Type");

     //Setting a database connection to phpmyadmin using mySQLi
     $db_host = "eu-cdbr-west-03.cleardb.net";
     $db_user = "bece1970f3fe5b";
     $db_pass ="b24c011d";
     $db_name = "heroku_8c69a3155a75dd3";
 
     $conn = new mysqli($db_host, $db_user, $db_pass, $db_name);
    //If the database cant connect an error message will be displayed and will exit
    if(mysqli_connect_error()){
        echo mysqli_connect_error();
        exit();
    }
    else{
        //Gets the contents of the file in a read only format
        $eData = file_get_contents("php://input");
        //Decodes the data in json format into php format and sets it as a variable
        $dData = json_decode($eData, true);

        //Setting a variable user and pass using the data from the php format
        $user = $dData['user'];
        $pass = $dData['pass'];

        //setting a result value to an empty string
        $result = "";

         //Comparing if there is any data within the user and pass variable
        if($user != "" and $pass != ""){
            //Creating a SQL statement and setting it to a variable
            $sql = "INSERT INTO user_details(user_id, user, pass) VALUES(null, '$user', '$pass');";
            //Setting a variable res to display the result from the SQL statement
            $res = mysqli_query($conn, $sql);
            
            //Seeing if the query was succesfull
            if($res != 0){
                //Setting result to you have registered successfully
                $result = "You have registered successfully!";
            }
            else{
                //If unable to insert setting result to username in use
                $result = "Username already in use";
            }
        }
        else{
            //Setting result to empty if user and pass are empty
            $result = "";
        }

        //Closing the database connection    
        $conn -> close();
        //Setting the result as an array, and populating the array with result and result value
        $response[] = array("result" => $result);
        //Printing the response array in json format
        echo json_encode($response);
    }

?>
