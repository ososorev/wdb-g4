<?php
session_start();
if(isset($_SESSION['user_id'])) {
  echo ("Выполнен вход с ID --> ");
  echo $_SESSION['user_id'];
} 

session_destroy(); // для тестирования сессий, сессия живет до обновления страницы