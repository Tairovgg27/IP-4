<?php
$login = filter_var(trim($_POST['login'])) ;
$password = filter_var(trim($_POST['password'])) ;


$mysql = new mysqli('localhost','root','root','lab2');
$result = $mysql -> query("SELECT * FROM `users` WHERE `login` = '$login' AND `password` = '$password'");
$user = $result -> fetch_assoc();
if($user['login'] == ''){
                echo 'Пользователя с таким логином не существует';
                exit();}
            else if(password_verify($password, $user['password'])){
                $this->setAuth($login);}
            else
                echo 'Пароли не совпадают';
                exit();
            
        
setcookie('user', $user['login'], time() + 36, "/");
$mysql->close();
header("Location: /authhh.php");
?>