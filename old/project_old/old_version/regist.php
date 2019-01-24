<?php
require_once("database.php");

$registration=new Database();
$registration -> database_connect("project");

$registration -> sql='SELECT * FROM users WHERE email LIKE '.'\''.htmlspecialchars($_POST['email']).'\'';

$registration -> query();

if ($registration -> is_email_exist() !== false) {
  exit();
}
else {
  $registration -> sql='INSERT INTO users(email) VALUES ('.'\''.htmlspecialchars($_POST['email']).'\''.')';
  // необходимо изменить структуру БД, так как не добавляется без полной информации
}