<?php
    header('Content-type: application/json');
    $host = "";
    $database = "";
    $user = "";
    $password = "";
    $connection = pg_connect("host=$host dbname=$database user=$user password=$password");

    $result = pg_query($connection, "SELECT * from automovel where idcategoria = 3");
    $arr = pg_fetch_all($result);
    echo json_encode($arr);

    pg_close($connection);
    
?>