<?php
    $login = filter_var(trim($_POST['login']));
    $password = filter_var(trim($_POST['password']));
    $email= filter_var(trim($_POST['email']));
    $re_pass = filter_var(trim($_POST['re_pass']));

    if(mb_strlen($login) < 5 || mb_strlen($login) > 20 ) {
        echo "Недопустимая длина логина";
        exit();
    } else if(mb_strlen($password) < 8 ) {
        echo "Пароль должен содержать минимум 8 символов";
        exit();
    }
    if($password != $re_pass){
        echo "Пароли не совпадают";
        exit();
    }
    $mysql = new mysqli('localhost','root','root','lab2');
    $mysql-> query("INSERT INTO `users`(`email`,`login`,`password`) VALUES('$email','$login','$password')");
    $mysql-> close();
    header("Location: /auth.html");
?>