<?php
class masterClass{
    
    private static $dbHost="localhost";
    private static $dbUser="root";
    // private static $dbPassword="codio";
    private static $dbPassword="";
    private static $dbName="stuffRequest";
    private static $link;
    private static $result;
    
    public static function dbConnect(){
        self::$link=new mysqli(self::$dbHost,self::$dbUser,self::$dbPassword,self::$dbName);

        if (mysqli_connect_errno()) {
           printf("Подключение к серверу MySQL невозможно. Код ошибки: %s\n", mysqli_connect_error());
           exit;
        }
    }
    
    public static function dbSignIn($email){
        if (self::$result = self::$link->query("SELECT id FROM users WHERE email='".$email."';")){
            //-----------------------------------------------------------------
        // if (self::$result = self::$link->prepare("SELECT id FROM users WHERE email=?;")){
            // self::$result->bind_param('s',$email);
            // $email='User2@mail';
            // self::$result->execute();
            //-----------------------------------------------------------------
            // print_r (self::$result);
            // print_r (self::$link);
            //.................................................................
            // printf("%d Row inserted.\n", self::$result->affected_rows);
            //.................................................................
            // self::$result->bind_result($id);
            // while( self::$result->fetch()){
                // self::$result->bind_result($id);
            // }
            //.................................................................
            // printf("%s\n", $row['affected_rows']);
            //.................................................................
            print("Result ID:\n");
            while( $row = self::$result->fetch_assoc()){
                // print_r($row);
                printf("%s\n", $row['id']);            
            }
            self::$result->close(); 
        }
    }
    
    public static function dbDisconnect(){
        self::$link->close();
    }
}
// $emaile="User@mail";//'User2@mail'
masterClass::dbConnect();
masterClass::dbSignIn('User2@mail');
masterClass::dbDisconnect();


