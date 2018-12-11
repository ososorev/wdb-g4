<?php
    class OpenDB{
            private static $my_link;
            private static $my_query;
      
            static function connection(){
                self::$my_link = mysqli_connect("localhost","root","codio","renthings");
            }

            static function openQuery($query_text){
                self::$my_query = mysqli_query( self::$my_link, $query_text);
            }

            static function getResults(){
                 if(mysqli_num_rows(self::$my_query) > 0)
                    {
                         $row = mysqli_fetch_assoc(self::$my_query);
                         $result=$row;
                    }
                 else{
                       $result=[];  
                 }
                 return $result;  
            }
            
            static function getLastInsertedID(){
                 $lastInsertedID = self::$my_link->insert_id;
                 $result["ID"]= $lastInsertedID;   
                 return $result;
            }
    }




/*
    class OpenDB{
            private $my_link;
            private $my_query;
      
            function connection(){
                $this->my_link = mysqli_connect("localhost","root","codio","renthings");
            }

            function openQuery($query_text){
                $this->my_query = mysqli_query( $this->my_link, $query_text);
            }

            function getResults(){
               
                 if(mysqli_num_rows($this->my_query) > 0)
                    {
                         $row = mysqli_fetch_assoc($this->my_query);
                         $result = "ИД пользователя: ".$row["ID"].", Имя пользователя: ".$row["USER_NAME"];
                    }
                 else{
                     $result='Неверный e-mail или пароль!';
                 }
                 return $result;  
                     
            }
    }
*/    
?>

