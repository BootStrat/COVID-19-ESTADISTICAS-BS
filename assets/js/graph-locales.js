///// Graph Bar - Chart 1

google.load('visualization', '1.0', {'packages':['corechart']});
        
google.setOnLoadCallback(drawSheetName);

 function drawSheetName() {

    var query = new google.visualization.Query(
    'https://docs.google.com/spreadsheets/d/1LnBXoeEnuGyaNgxqbfx7McvNviiEl52vdXrClxDqH1A/edit#gid=0&range=A1:F9');
    query.send(handleSampleDataQueryResponse);
  }

  function handleSampleDataQueryResponse(response) {
    if (response.isError()) {
      alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
      return;
    }

    var data = response.getDataTable();
    var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
    chart.draw(data, {height: '500', width: '100%',});
  }



///////// Graph Table - Chart 2

google.charts.load('current', {packages: ['table']});

        
google.setOnLoadCallback(drawChart1);

 function drawChart1() {
    var queryString = encodeURIComponent('SELECT A:B7');

    var query1 = new google.visualization.Query(
    'https://docs.google.com/spreadsheets/d/1LnBXoeEnuGyaNgxqbfx7McvNviiEl52vdXrClxDqH1A/edit#gid=0&headers=1&tq=' + queryString);   ///// poner el url del sheets con los permisos en público
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
    chart.draw(data, {height: '480',width: '100%',});
}

///// • Para poner varios gráficos en uno, tenes que enumerar las variables para que no se mezclen 
/////  entre ellos. Ej.: 
/////           Chart 1
/////    Linea 10:  var query = new google.visualization.Query(
/////           Chart 2
/////    Linea 38:   var query1 = new google.visualization.Query(
  


 ////  https://docs.google.com/spreadsheets/d/1LnBXoeEnuGyaNgxqbfx7McvNviiEl52vdXrClxDqH1A/edit#gid=0&range=A1:F9
///// SELECT A1:F9