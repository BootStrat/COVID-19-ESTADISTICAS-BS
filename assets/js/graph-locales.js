///// Graph Bar - Chart 1

google.load('visualization', '1.0', {'packages':['corechart']});
        
google.setOnLoadCallback(Grafico1);

 function Grafico1() {
    var query = new google.visualization.Query(
    'https://docs.google.com/spreadsheets/d/1FTpvXn3dlcld5e_XUPfpWhrmm86uE3ziwRkriIt-aMY/edit#gid=0');
    query.send(handleSampleDataQueryResponse);
  }
  var options = {
    width: '100%',
    height: 400,
    legend: { position: "bottom", },
    colors: ['#819FE2', '#EA846A', '#FEC062', '#6CBF70', '#C061C2']
  };

  function handleSampleDataQueryResponse(response) {
    if (response.isError()) {
      alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
      return;
    }

    var data = response.getDataTable();
    var chart = new google.visualization.ColumnChart(document.getElementById('grafico'));
    chart.draw(data, options)
    
  }

///////// Graph Table - Chart 2

google.charts.load('current', {packages: ['table']});

        
google.setOnLoadCallback(tablerogeneral);

 function tablerogeneral() {
    var queryString = encodeURIComponent('A, F,');

    var query1 = new google.visualization.Query(
    'https://docs.google.com/spreadsheets/d/15QTvrGXzmPcLJWqfk4SH_bE50vBOEg565-suDNjZRRA/edit#gid=0&fvid=2142043989' + queryString);   ///// poner el url del sheets con los permisos en público
    query1.send(handleSampleDataQueryResponse1);  
  }

  function resizeHandler () {
    chart.drawChart1(data, options);
}
if (window.addEventListener) {
    window.addEventListener('resize', resizeHandler, false);
}
else if (window.attachEvent) {
    window.attachEvent('onresize', resizeHandler);
}

  function handleSampleDataQueryResponse1(response) {
    if (response.isError()) {
      alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
      return;
    }


    var data = response.getDataTable();
    var chart = new google.visualization.Table(document.getElementById('tabla'));
    chart.draw(data, {
        sortColumn: 0,
        sortAscending: false,
        height: '400', width: '100%',});
}

///// • Para poner varios gráficos en uno, tenes que enumerar las variables para que no se mezclen 
/////  entre ellos. Ej.: 
/////           Chart 1
/////     var query = new google.visualization.Query(
/////           Chart 2
/////     var query1 = new google.visualization.Query(
  


/////  https://docs.google.com/spreadsheets/d/1LnBXoeEnuGyaNgxqbfx7McvNviiEl52vdXrClxDqH1A/edit#gid=0&range=A1:F9
///// SELECT A1:F9

