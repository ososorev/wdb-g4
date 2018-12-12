<?php
ini_set("display_errors", 1);
error_reporting(E_ALL);

require 'database.php';

$userEmail=$_POST["email"];
// echo $userEmail;
database::connect();
$result=database::signUp($userEmail);
if (empty($result))print_r("такой пользователь уже есть");//(!$result)
else printf("пользователь с адресом %s создан",$userEmail);
// database::disconnect();