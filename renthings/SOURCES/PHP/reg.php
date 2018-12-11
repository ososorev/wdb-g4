<?php
         require_once('db.php');
         $v1=$_REQUEST['v1'];
         $operator = $_REQUEST['action'];
/*
         $user = new OpenDB();
         $user->connection();
         $user->openQuery("insert into USERS_LIST (EMAIL) values ('".$v1."')");
         echo 'Пользователь с Email '.$v1.' добавлен.';
*/
         OpenDB::connection();
         OpenDB::openQuery("insert into USERS_LIST (EMAIL) values ('".$v1."')");
         $results=OpenDB::getLastInsertedID();
         echo json_encode($results);
         session_start();
         $_SESSION['userID']=$results["ID"];
?> 
