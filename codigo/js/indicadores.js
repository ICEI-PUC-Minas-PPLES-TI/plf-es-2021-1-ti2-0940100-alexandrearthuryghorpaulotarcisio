
window.onload=()=>{
    //indicadoresDesempenso();
    indicadores();
}

indicadores=()=>{
        $.ajax({
        url: '../php/indicadores.php',
        type: 'GET',
        dataType: 'json'
        }).done(function(result){
            console.log(result);
            
            // Indicador 1
            let qtdClientesUltimoTrimestre = parseInt(result[5].ultimo_trimestre);
            let qtdClientesUltimoSemestre = parseInt(result[6].ultimo_semestre);

            let indicador1_taxaCrescimento = (100*(qtdClientesUltimoTrimestre - qtdClientesUltimoSemestre) / qtdClientesUltimoSemestre);
            indicador1.innerHTML = `${indicador1_taxaCrescimento}%`;

            // Indicador 2
            let indicador2 = document.getElementById('indicador2');
            indicador2.innerHTML = parseFloat(result[0].media_nota).toFixed(2);

            // Indicador 3
            let indicador3 = document.getElementById('indicador3');
            indicador3.innerHTML = `R$${parseInt(result[1].media_gasto)},00`;

            // indicador 5
            let indicador51 = document.getElementById('indicador51');
            indicador51.innerHTML = `R$${parseInt(result[4].avg)},00`;

            let indicador52 = document.getElementById('indicador52');
            indicador52.innerHTML = `R$${parseInt(result[3].avg)},00`;

            let indicador53 = document.getElementById('indicador53');
            indicador53.innerHTML = `R$${parseInt(result[2].avg)},00`;


        });
}
