<!DOCTYPE html>
<html lang="ru">
 <head>
  <meta charset=utf-8>
  <title>Таиров Эмиль</title>
  <link rel="stylesheet"  href="css\2 lab.css">
  <link rel="stylesheet"  href="css\login.css">
 </head>
 <body>
     <header>
      <p>Таиров Эмиль ИВТАПбд-12</p>
      <tel>Почта для связи: tairov.19@bk.ru</tel>
    </header>
  <div >
      <a>главное</a>
      <a href="school.html">образование</a> 
      <a href="sport.html"> спорт </a> 
      <a href="dosti.html">достижения</a>
      <a href="gallery.html">галлерея</a>
      <a href="lab.html">лабораторные</a>
      <a>вход</a>
  </div>
  
  <div class="registr">
  <h2>Список пользователей</h2>
<?php
$conn = mysqli_connect("localhost", "root", "root", "lab2");
if (!$conn) {
  die("Ошибка: " . mysqli_connect_error());
}
$sql = "SELECT * FROM users";
if($result = mysqli_query($conn, $sql)){
     
    $rowsCount = mysqli_num_rows($result); 
   
    echo "<table><tr><th>логин</th><th>пароль</th><th>почта</th><th></th></tr>";
    foreach($result as $row){
        echo "<tr>";
            echo "<td>" . $row["login"] . "</td>";
            echo "<td>" . $row["password"] . "</td>";
            echo "<td>" . $row["email"] . "</td>";
            echo 
                "<td> <form action='php/delete.php' method='post'>
                        <input type='hidden' name='login' value='" . $row["login"] . "' />
                        <input type='submit' value='Удалить'>
                </form></td>";
        echo "</tr>";
    }
    echo "</table>";
    mysqli_free_result($result);
} else{
    echo "Ошибка: " . mysqli_error($conn);
}
mysqli_close($conn);
?>

      <footer>
      </footer>
      </div>
    </form>
    </body>
 </html>