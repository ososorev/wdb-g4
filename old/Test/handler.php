 <?php
 $host="localhost";
 $user="root";
 $pass="codio";
 $link = mysqli_connect($host, $user, $pass, "notebook");
//   print_r($link);
 if (mysqli_connect_errno()) {
    printf("Не удалось подключиться: %s\n", mysqli_connect_error());
    exit();
 }


 $username=htmlspecialchars($_POST['username']);
 $password=htmlspecialchars($_POST['password']);
 $marker=htmlspecialchars($_POST['marker']);

// INSERT
 if($marker == "insert") {  
 mysqli_query($link, "INSERT INTO users(username, password) VALUES ('$username','$password')");
 }

// DELETE
 if($marker == "delete") {
 mysqli_query($link, "DELETE FROM users WHERE username LIKE '$username'");
 }

// UPDATE
 if($marker == "update") {
 $new_username=htmlspecialchars($_POST['new_username']);  
 mysqli_query($link, "UPDATE users SET username='$new_username' WHERE username LIKE '$username'");
 }
   
// SELECT
 if($marker == "select") {
   $query = "SELECT * FROM users WHERE username LIKE '%$username%'";
   $result = mysqli_query($link, $query);
   
   echo "<table>\n";
   while ($line = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
      echo "\t<tr>\n";
      foreach ($line as $col_value) {
          echo "\t\t<td>$col_value</td>\n";
      }
      echo "\t</tr>\n";
   }
   echo "</table>\n";
 }  
 

 mysqli_free_result($result);
 mysqli_close($link);