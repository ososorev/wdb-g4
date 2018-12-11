  <?php
         require_once('db.php');
         $v1=$_REQUEST['v1'];
         $v2=$_REQUEST['v2'];
         $operator = $_REQUEST['action'];
/*
         $user = new OpenDB();
         $user->connection();
         $user->openQuery("SELECT * FROM USERS_LIST where EMAIL='".$v1."' and PASSWORD='".$v2."'");
         echo $user->getResults();
*/         
         OpenDB::connection();
         OpenDB::openQuery("SELECT * FROM USERS_LIST where EMAIL='".$v1."' and PASSWORD='".$v2."'");
         $results=OpenDB::getResults();
         echo json_encode($results);
         session_start();
         $_SESSION['userID']=$results["ID"];
     ?> 