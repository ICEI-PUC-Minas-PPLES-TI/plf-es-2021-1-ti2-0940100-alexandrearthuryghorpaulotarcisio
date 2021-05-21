<?php
    header('Content-type: application/json');
    $host = "baseti.postgres.database.azure.com";
    $database = "localexx";
    $user = "adm@baseti";
    $password = "@Pucminas";
    $connection = pg_connect("host=$host dbname=$database user=$user password=$password");

    $result = pg_query($connection, "SELECT * from acessorio");
    $arr = pg_fetch_all($result);
    echo json_encode($arr);

    pg_close($connection);
    
?>