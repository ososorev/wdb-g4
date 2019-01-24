<?php

// форма регистрации с помощью AJAX запрос на сервер на создание пользователя (отдельный файл)
// форма входа создать файл проверка имени пользователя(отдельный файл)
// класс DataBase в отдельном файле connect, query($link, $sql), fetch
// 
// оба первых файла подключают DataBase
// require_once("database.php");

// class Car {
//   $model;
//   $number;
//   $color;
//   function move($x,$y) {
// //     тело функции
//   }
// }

// $bmw = new Car();
// $bmw -> color = "black";
// $bmw -> move(3,5);

class Car {
  private $type;
  protected $number;
  public $x;
  function move($x,$y) {
    $this -> x=$x;
    $this -> y=$y;
    $this -> number=036;
    echo "<pre>";
    print_r ($this->number);
    echo "</pre>";
  }
}

class Truck extends Car {
  public $trailer;
}

$bmw = new Car();
echo "<pre>";
print_r ($bmw);
echo "</pre>";

$bmw -> number=1;
echo "<pre>";
print_r ($bmw);
echo "</pre>";

$bmw -> move(10,10);
echo "<pre>";
print_r ($bmw);
echo "</pre>";


$man = new Truck();
echo "<pre>";
print_r ($man);
echo "</pre>";

$man -> trailer=true;
echo "<pre>";
print_r ($man);
echo "</pre>";

$man -> move(10,10);
echo "<pre>";
print_r ($man);
echo "</pre>";

// class Truck extends Car {
//   $trailer;
// }

// $tr = new Truck();
// $tr -> number = "255";
// $tr -> trailer = true;