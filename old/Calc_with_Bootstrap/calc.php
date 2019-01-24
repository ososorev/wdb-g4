<?php
 session_start();
  $marker=$_POST["marker"];
  
  if($marker=="1"){
    $first="input_check";
    $second="input_check";
    $result=NULL;
    
    $first=0+htmlspecialchars($_POST["first"]); 
    $second=0+htmlspecialchars($_POST["second"]);
    $operation=htmlspecialchars($_POST["operation"]);
 
  // echo $first;
  // var_dump(is_int($first));
    if ($first==="input_check" || $second==="input_check") {      
      echo "Введите оба числа и выберите операцию";
    }
    else { 
          if($operation=="+"){        // Сложение
            $result=$first+$second;
          } 
          else if($operation=="-"){
            $result=$first-$second;   // Вычитание
          } 
          else if($operation=="*"){
            $result=$first*$second;   // Умножение
          }
          else if($operation=="/"){   // Деление
            if($second==0){
              $result=NULL;
              echo "На ноль делить нельзя!";
            }
            else {
            $result=$first/$second;
              
            }
          }  
          echo $note="Результат ==> $first$operation$second=$result";
          
     }         
  }
  $marker="0";
  
echo "<br>ЛОГ:<br>";

$_SESSION[$massiv][]=$note;



$a=count($_SESSION[$massiv]);
//var_dump($_SESSION[$massiv]);
//var_dump ($a);

  for($j=$a ; $j>=$a-5 ; $j--){

    echo $_SESSION[$massiv][$j];
    echo "<br>";
}

//session_destroy();  