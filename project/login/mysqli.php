<?php

class MasterClass{
    private static $mysqli;
    private static $templateSignIn;
    private static $email;
    private static $password;
    private static $id;
    
    
    public static function connectDatabase($localhost,$user,$password,$database){
        self::$mysqli=new mysqli($localhost,$user,$password,$database)
        /* Проверка соединения */ 
        if (mysqli_connect_errno()) {
            printf("Подключение невозможно: %s\n", mysqli_connect_error());
            exit();
        }
        mysqli_set_charset(self::$mysqli, "utf8");
        /* Подготовленное выражение */ 
        sendTemplateSignIn(){
            self::$templateSignIn=self::$mysqli->prepare("SELECT id FROM users WHERE email=? AND password=?");
            self::$templateSignIn->bind_param('ss',$email,$password);//type email=string and password=string
        }
        return self::$mysqli;
    }
    
    public static function signIn($parameter1,$parameter2){
        self::$email=$parameter1;
        self::$password=$parameter2;
        self::$templateSignIn->execute();
        /* Объявление переменных для заготовленного выражения*/
        self::$templateSignIn->bind_result($id);
        echo($id);//добавить проверку на undefined или null
        self::$templateSignIn->close();
    }
    
    public static function disconnectDatabase(){
        self::$mysqli->close();
    }
}