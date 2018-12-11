<?php
//    if (!isset($_SESSION['userID'])) {
//            echo " ИД пользователя из сессии: ".$_SESSION['userID'];            
//    }
//    else{
//            echo "Сессия пустая";
//    }

    session_start();  
    $result="Не авторизирован";
    if (isset($_SESSION['userID'])){
        if ($_SESSION['userID']!=0) {
            $result=" ИД пользователя из сессии: ".$_SESSION['userID'];
        }
    }
    echo $result;

