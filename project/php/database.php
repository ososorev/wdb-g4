<?php
ini_set("display_errors", 1);
error_reporting(E_ALL);

class database{
    
    private static $host="localhost";
    private static $user="root";
    private static $password="codio";
//     private static $password="";
    private static $name="stuffRequest";
    private static $link;
    private static $result;
    
    public static function connect(){
        self::$link=new mysqli(self::$host,self::$user,self::$password,self::$name);

        if (mysqli_connect_errno()) {
           printf("Подключение к серверу MySQL невозможно. Код ошибки: %s\n", mysqli_connect_error());
           exit;
        }
    }
    
    public static function signIn($email,$password){
        self::$result = self::$link->query("SELECT id FROM users WHERE email='".$email."' AND password='".$password."';");
    }

    public static function signUp($email){
        self::$result=self::$link->query("INSERT INTO users (name,password,email,phone) VALUES ('','','".$email."','');");
        return self::$result;
    }

    public static function query($query) {
        return self::$link->query(query);
    }
    
    public static function getResult(){
        if (self::$result->num_rows > 0) {
            while( $row = self::$result->fetch_assoc() ) {
                $array[] = $row;
            }
            return $array;
        }
        else {
            echo "FALSE"."<br/>";
            return "FALSE";
            // exit();
        }
    }     

    public static function disconnect(){
        self::$result->close(); //хз
        self::$link->close();
    }
}