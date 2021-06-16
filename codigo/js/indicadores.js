
window.onload=()=>{
    indicadores();
}

indicadores=()=>{
    $.ajax({
    url: '../php/indicadores.php',
    type: 'GET',
    dataType: 'json'
    }).done(function(result){
        // Indicador 1
        let qtdClientesUltimoTrimestre = parseInt(result[5].ultimo_trimestre);
        let qtdClientesUltimoSemestre = parseInt(result[6].ultimo_semestre);

        let indicador1_taxaCrescimento = (100*(qtdClientesUltimoTrimestre - qtdClientesUltimoSemestre) / qtdClientesUltimoSemestre);
        indicador1.innerHTML = `${indicador1_taxaCrescimento}%`;

        // Indicador 2
        let indicador2 = document.getElementById('indicador2');
        indicador2.innerHTML = parseFloat(result[0].media_nota).toFixed(2);

        // indicador 4
        cliente1 = result[7];
        cliente2 = result[8];
        cliente3 = result[9];
        cliente4 = result[10];
        cliente5 = result[11];
        cliente6 = result[12];
        cliente7 = result[13];
        cliente8 = result[14];

        // Indicador 3
        let indicador3 = document.getElementById('indicador3');
        indicador3.innerHTML = `R$${parseInt(result[1].media_gasto)},00`;

        // Indicador 5
        dados = parseInt(result[4].avg);
        dados2 = parseInt(result[3].avg);
        dados3 = parseInt(result[2].avg);
        google.load("visualization", "1", {packages:["corechart"]});
        google.setOnLoadCallback(drawCharts);
        drawCharts();
    });
}


function drawCharts(result) {
    
    // BEGIN PIE CHART
    
    // pie chart data
    var pieData = google.visualization.arrayToDataTable([
      ['Categorias', 'Valores'],
      ['Econômica'   ,      dados],
      ['Intermediária',   dados2],
      ['Executiva',   dados3]
    ]);
    // pie chart options
    var pieOptions = {
      backgroundColor: 'transparent',
      pieHole: 0.4,
      colors: [ "cornflowerblue", 
                "olivedrab", 
                "orange", 
                "tomato", 
                "crimson", 
                "purple", 
                "turquoise", 
                "forestgreen", 
                "navy", 
                "gray"],
      pieSliceText: 'value',
      tooltip: {
        text: 'percentage'
      },
      fontName: 'Open Sans',
      chartArea: {
        width: '100%',
        height: '100%'
      },
      legend: {
        textStyle: {
          fontSize: 13
        }
      }
    };
    // draw pie chart
    var pieChart = new google.visualization.PieChart(document.getElementById('pie-chart'));
    pieChart.draw(pieData, pieOptions);
}