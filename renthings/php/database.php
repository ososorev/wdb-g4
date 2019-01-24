<?php
class Database {
  private static $link;
  private static $query_result;
 
  static function database_connect() {
    self::$link=mysqli_connect("localhost", "root", "codio", "project");
 
    if (mysqli_connect_errno()) {
      printf("Не удалось подключиться: %s\n", mysqli_connect_error());
      exit();
    }
  }

  static function send_query($sql) {
    self::$query_result=mysqli_query(self::$link, $sql);
    return self::$query_result;
  }
  
  static function fetch_query_result() {
    if (mysqli_num_rows (self::$query_result) > 0) {
      $result_fetch = mysqli_fetch_assoc (self::$query_result);
    }
    else {
      $result_fetch = 0;
    }
    return $result_fetch;
  }
  
  static function is_email_exist() {
    if (mysqli_num_rows (self::$query_result) > 0) {
      echo ("User with the same name already exists");
    }
    else {
      return false;
      
    }
  }
  
  static function getLastInsertId() {
    $lastInsertId = self::$link->insert_id();
    return $lastInsertId;
  }
  
}
