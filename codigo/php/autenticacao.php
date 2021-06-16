<?php
    $campoEmail = $_POST['email'];
    $campoSenha = $_POST['senha'];
    $host = "baseti.postgres.database.azure.com";
    $database = "localexx";
    $user = "adm@baseti";
    $password = "@Pucminas";
    $connection = pg_connect("host=$host dbname=$database user=$user password=$password");
    $query = "SELECT * from cliente";
    $result_set = pg_query($connection, $query) or die("Erro de conexao! <br/>");

    $loginCorreto = false;
    
    while ($row = pg_fetch_row($result_set))
    {
        $email = $row[5];
        $senha = $row[6];
        if($senha == $campoSenha && $email == $campoEmail){
            $loginCorreto = true;
        }
    }

    pg_free_result($result_set);
    pg_close($connection);
    
    echo json_encode($loginCorreto);
    
?>