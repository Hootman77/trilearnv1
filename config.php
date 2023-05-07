<?php 
$db_host = "eu-cdbr-west-03.cleardb.net";
$db_user = "bece1970f3fe5b";
$db_pass ="b24c011d";
$db_name = "heroku_8c69a3155a75dd3";

$connect = mysqli_connect($db_host, $db_user, $db_pass, $db_name) or die("database connection error")
