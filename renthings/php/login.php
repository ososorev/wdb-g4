<?php
require_once("database.php");

Database::database_connect();
Database::send_query('SELECT * FROM users WHERE email LIKE '.'\''.htmlspecialchars($_POST['email']).'\'');

function sayHi() {
  $row = Database::fetch_query_result();
  if(!empty ($row)) {
    session_start();
    printf ("Hi, %s \n", $row["email"]);
    $_SESSION['user_id']=$row['id'];
  }
  else {
    echo ("User not found");
  }
}

sayHi();

