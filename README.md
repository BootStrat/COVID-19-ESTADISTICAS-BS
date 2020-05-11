# Datos COVID-19 Pergamino 

El objetivo de este proyecto es utilizar los datos proporcionados por el sitio web del Partido de Pergamino de este modo arrojarlos en un gráfico para poder visualizar y comparar con días anteriores.

## Concepto:

![Imagen conceptual del proyecto](/assets/img/concepto-datoscovid.png "Concepto del proyecto")

## Recursos.

* **Fuente**: Se utilizó los datos proporcionados por el Municipio. 

*  **Base de datos**: Como BD se utilizó la hoja de Cálculo de Google, *Google Spreadsheet* aunque podría implementarse *phpMyAdmin*, *MySQL*, *MySQLlite*, entre otros servicios para alojar datos. En este caso utilizamos esta alternativa para poder realizarlo sin tener un hosting. 

* **Gráficos**: *Charts Google*, proporciona una gran cantidad de gráficos y adaptables a cualquier sistema de base de datos.

## Creación y ejecución.

Para implementar los gráficos se creó una web con HTML, CSS, JS y la librería Bootstrap.


## Gráficos + Base de datos

Los gráficos de Charts Google son enlazados con las hojas de cálculo de Google.


``` 
  var query1 = new google.visualization.Query(
    'https://docs.google.com/spreadsheets/d/xxxxxxxxxxx/edit#gid=0&fvid=2142043989' + queryString);   ///// poner el url del sheets con los permisos en público
    query1.send(handleSampleDataQueryResponse1);  
  } 

``` 







