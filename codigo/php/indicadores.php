<?php
    header('Content-type: application/json');
    $host = "baseti.postgres.database.azure.com";
    $database = "localexx";
    $user = "adm@baseti";
    $password = "@Pucminas";
    $connection = pg_connect("host=$host dbname=$database user=$user password=$password");

    //indicador 1
    $query1 = "select count(nome) as ultimo_trimestre from cliente
    where data_inscricao > CURRENT_DATE - interval '3 months'";
    
   

    $query11 = "select count(nome) as ultimo_semestre from cliente
    where data_inscricao < CURRENT_DATE - interval '3 months'";

    //indicador 2
    $query2 = "select avg(nota)as media_nota from aluguel";
    
    

    //indicador 3
    $query3 = "select sum(valor)/count(DISTINCT cpf) as media_gasto from aluguel";
   
    //indicador 4
    $query4 = "select sum(a.valor) totalCliente, a.cpf, c.nome from aluguel a inner join cliente c on a.cpf = c.cpf group by a.cpf, c.nome order by sum(a.valor) desc";
    
    //indicador 5
    $query5 = "select au.idcategoria, avg(al.valor)
    from aluguel al join automovel au on al.placa = au.placa join categoria cat on au.idcategoria = cat.id
    group by au.idcategoria
    order by 1 asc";
    
    
    //indicador 1
    $result1 = pg_query($connection, $query1);
    $result11 = pg_query($connection, $query11);

    //indicador 2
    $result2 = pg_query($connection, $query2);

    //indicador 3
    $result3 = pg_query($connection, $query3);

    //indicador 4
    $result4 = pg_query($connection, $query4);

    //indicador 5
    $result5 = pg_query($connection, $query5);

    //indicador 1
    $arr1 = pg_fetch_all($result1);
    $arr11 = pg_fetch_all($result11);

    //indicador 2
    $arr = pg_fetch_all($result2);

    //indicador 3
    $arr2 = pg_fetch_all($result3);
    
    //indicador 4
    $arr4 = pg_fetch_all($result4);

    //indicador 5
    $arr5 = pg_fetch_all($result5);


    $resultado = array_merge($arr, $arr2, $arr5, $arr1, $arr11, $arr4);
    
    echo json_encode($resultado);
    pg_close($connection);
    
?>