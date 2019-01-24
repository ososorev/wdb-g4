<?php
require_once("database.php");

Database::database_connect();
Database::send_query('SELECT * FROM users WHERE email LIKE '.'\''.htmlspecialchars($_POST['email']).'\'');

if (Database::is_email_exist() !== false) {
  exit();
}

$user=$_POST['email'];
$pass=$_POST['pass'];

Database::send_query("INSERT INTO users (email, password) VALUES ('".$user."', '".$pass."')");

// $row['id']=getLastInsertId();
// session_start();
// $_SESSION['user_id']=$row['id'];