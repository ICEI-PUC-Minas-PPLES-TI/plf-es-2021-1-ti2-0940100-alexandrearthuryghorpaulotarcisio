<?php
    $dataRetirada = $_POST['dataRetirada'];
    $horaRetirada = $_POST['horaRetirada'];
    $dataDevolucao = $_POST['dataDevolucao'];
    $horaDevolucao = $_POST['horaDevolucao'];
    $nota = $_POST['nota'];
    $valorAluguel = $_POST['valorAluguel'];
    $emailUsuario = $_POST['usuario'];
    $modeloCarro = $_POST['modelo'];

    $host = "baseti.postgres.database.azure.com";
    $database = "localexx";
    $user = "adm@baseti";
    $password = "@Pucminas";
    $connection = pg_connect("host=$host dbname=$database user=$user password=$password");

    $result = pg_query($connection, "SELECT cpf from cliente where email = '$emailUsuario'");
    $resultEmail = pg_fetch_all($result);

    $cpfUsuarioLogado = $resultEmail[0]['cpf'];

    $result2 = pg_query($connection, "SELECT placa from automovel where modelo = '$modeloCarro'");
    $resultPlaca = pg_fetch_all($result2);

    $placaAutomovel = $resultPlaca[0]['placa'];


    $result3 = pg_query($connection, "SELECT max(codaluguel) from aluguel");
    $resultMax = pg_fetch_all($result3);

    $maiorCodigo = $resultMax[0]['max'];
    
    $codigo = $maiorCodigo + 1;
    $endereco = 'Rua da Bandeira, 200 - Jardim Branco';
    $status = 'Finalizado';
    $query = "INSERT into aluguel values ($codigo, '$endereco', '$status', '$dataRetirada', '$horaRetirada', '$dataDevolucao', '$horaDevolucao', $nota, $valorAluguel, '$cpfUsuarioLogado', '$placaAutomovel')";
    $result_set = pg_query($connection, $query); 
    pg_free_result($result_set);

    $query2 = "UPDATE automovel set disponibilidade = 'N' where modelo = '$modeloCarro'";
    $result_set2 = pg_query($connection, $query2); 
    pg_free_result($result_set2);

    pg_close($connection);
    exit();
?>