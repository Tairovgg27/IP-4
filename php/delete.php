<?php
if(isset($_POST["login"]))
{
    $conn = mysqli_connect("localhost", "root", "root", "lab2");
    if (!$conn) {
      die("Ошибка: " . mysqli_connect_error());
    }
    $userid = mysqli_real_escape_string($conn, $_POST["login"]);
    $sql = "DELETE FROM users WHERE login = '$userid'";
    if(mysqli_query($conn, $sql)){
         
        header("Location: /authhh.php");
    } else{
        echo "Ошибка: " . mysqli_error($conn);
    }
    mysqli_close($conn);    
}
?>