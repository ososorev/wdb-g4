<?php
ini_set("display_errors", 1);
error_reporting(E_ALL);

header ('Content-Type: text/html; charset=utf-8');
include ('database.php');

// session_start();
// print_r($_SESSION["array"]);
// if(!isset($_SESSION["array"])) $_SESSION["array"]=[];
// unset($_SESSION["array"]);
// if(!is_null($_SESSION["array"])){
    // echo ("Сессия уже открыта. ID пользователя: ".$_SESSION["array"]."</br>");
    // echo '<input type="button" value="Закрыть сессию"/>';
    // unset($_SESSION["array"]);
// }
// else{
    // $checkboxRememberMe=$_GET["checkboxRememberMe"];
    // if($checkboxRememberMe!="on"){
    $userEmail=$_POST["email"];
    $userPassword=$_POST["password"];
    database::connect();
    database::signIn($userEmail,$userPassword);
    $result=database::getResult();
    if ($result=="FALSE")printf("Неверный логин или пароль\n", $userEmail);
    else
        for($row=0;$row<count($result);$row++){
            printf("id=%s для пользователя с адресом $userEmail\n", $result[$row]['id']);
            // $_SESSION["array"]=$result[$row]['id'];
        }

    database::disconnect();
// }

