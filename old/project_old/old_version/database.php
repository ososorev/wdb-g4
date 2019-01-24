<?php
class Database {
  private $database_name;
  private $link;
  public $sql;
  public $query_result;
  private $row;
 
  function database_connect($database_name) {
    $this -> database_name=$database_name;
    $this -> link=mysqli_connect("localhost", "root", "codio", $this->database_name);
 
    if (mysqli_connect_errno()) {
      printf("Не удалось подключиться: %s\n", mysqli_connect_error());
      exit();
    }
  }

  function query() {
    $this -> query_result=mysqli_query($this -> link, $this -> sql);
  }
  
  function fetch_email() {
    if ($this -> query_result && $this -> query_result -> num_rows != 0) {
      echo ("Hi, ");
      while ($row = mysqli_fetch_assoc ($this -> query_result)) {
          printf ("%s\n", $row["email"]);
      }

      $this -> query_result -> free();
    }
    else {
      echo("User is not found");
    }
  }
  
  function is_email_exist() {
    if ($this -> query_result && $this -> query_result -> num_rows != 0) {
      echo ("User with the same name already exists");
      $this -> query_result -> free();
    }
    else {
      return false;
      
    }
  }
  
}
