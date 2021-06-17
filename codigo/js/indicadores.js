
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

        let indicador1_taxaCrescimento = (100*(qtdClientesUltimoSemestre - qtdClientesUltimoTrimestre) / qtdClientesUltimoSemestre);
        indicador1_taxaCrescimento = parseFloat(indicador1_taxaCrescimento).toFixed(2)
        indicador1.innerHTML = `${indicador1_taxaCrescimento}%`;

        // Indicador 2
        let indicador2 = document.getElementById('indicador2');
        indicador2.innerHTML = parseFloat(result[0].indicador2).toFixed(2);

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
        indicador3.innerHTML = `R$${parseInt(result[1].indicador3)},00`;

        // Indicador 5
        dados = parseInt(result[4].avg);
        dados2 = parseInt(result[3].avg);
        dados3 = parseInt(result[2].avg);
        google.load("visualization", "1", {packages:["corechart"]});
        google.setOnLoadCallback(drawCharts);
        drawCharts(result);
    });
}


function drawCharts(result) {
    
    var pieData = google.visualization.arrayToDataTable([
      ['Categorias', 'Valores'],
      ['Econômica'   ,      dados],
      ['Intermediária',   dados2],
      ['Executiva',   dados3]
    ]);
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
    var pieChart = new google.visualization.PieChart(document.getElementById('pie-chart'));
    pieChart.draw(pieData, pieOptions);
    $.ajax({
      url: '../php/indicadores.php',
      type: 'GET',
      dataType: 'json'
      }).done(function(result){
      var barData = google.visualization.arrayToDataTable([
        ['Nome', 'Valor Gasto'],
        [result[7].nome,  parseFloat(result[7].gastomediocliente)],
        [result[8].nome,  parseFloat(result[8].gastomediocliente)],
        [result[9].nome,  parseFloat(result[9].gastomediocliente)],
        [result[10].nome,  parseFloat(result[10].gastomediocliente)],
        [result[11].nome,  parseFloat(result[11].gastomediocliente)],
        [result[12].nome,  parseFloat(result[12].gastomediocliente)],
        [result[13].nome,  parseFloat(result[13].gastomediocliente)],
        [result[14].nome,  parseFloat(result[14].gastomediocliente)]]);
      var barOptions = {
        focusTarget: 'category',
        backgroundColor: 'transparent',
        colors: ['cornflowerblue', 'tomato'],
        fontName: 'Open Sans',
        chartArea: {
          left: 50,
          top: 10,
          width: '100%',
          height: '70%'
        },
        bar: {
          groupWidth: '80%'
        },
        hAxis: {
          textStyle: {
            fontSize: 11
          }
        },
        vAxis: {
          minValue: 0,
          maxValue: 6000,
          baselineColor: '#DDD',
          gridlines: {
            color: '#DDD',
            count: 4
          },
          textStyle: {
            fontSize: 11
          }
        },
        legend: {
          position: 'bottom',
          textStyle: {
            fontSize: 12
          }
        }
      };

      var barChart = new google.visualization.ColumnChart(document.getElementById('bar-chart'));
      barChart.draw(barData, barOptions);
    });
}