<?php
$username = filter_input(INPUT_POST, 'username');
$email = filter_input(INPUT_POST, 'email');
$gender = filter_input(INPUT_POST, 'gender');
$birth = filter_input(INPUT_POST, 'birth');
$cpf = filter_input(INPUT_POST, 'cpf');
$cnh = filter_input(INPUT_POST, 'cnh');
$senha = filter_input(INPUT_POST, 'password');

if($gender == 'male'){
    $gender = 'M';
} else if($gender == 'female'){
    $gender = 'F';
}

if (!empty($username)){
    $host = "";
    $database = "";
    $user = "";
    $password = "";
    
    $connection = pg_connect("host=$host dbname=$database user=$user password=$password") or die("Erro de conexao<br/>");
    $query = "INSERT INTO cliente (cpf, cnh, sexo, dtnascimento, nome, email, senha) VALUES ('$cpf', '$cnh', '$gender', '$birth', '$username', '$email', '$senha')";
    $result_set = pg_query($connection, $query); 

    pg_free_result($result_set);
    pg_close($connection);
    
    header('Location: ../html/login.html');
    exit();
}

?>