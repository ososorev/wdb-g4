<?php
require_once("database.php");

$authorization=new Database();
$authorization -> database_connect("project");

$authorization -> sql='SELECT * FROM users WHERE email LIKE '.'\''.htmlspecialchars($_POST['email']).'\'';

$authorization -> query();

$authorization -> fetch_email();

