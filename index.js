var http = require('http');
const cors = require('cors');
var express = require('express');
var app = express();
var mysql      = require('mysql');  

app.use(cors())

var connection = mysql.createConnection({  
  host     : 'localhost',  
  user     : 'root',  
  password : '',  
  database : 'practicafinal'    
});      


connection.connect(function(err){
if(!err) {
    console.log("Database is connected ... nn");    
} else {
    console.log("Error connecting database ... nn");    
}
});


app.get('/json', (req, res) => {
 
  connection.query('select p.semana,t.complemento,b.costo from beneficiarios b inner join dim_tipocomplemento t on (b.id_tipocomplemento=t.id) inner join dim_periodo p on (b.id_periodo=p.id) group by p.semana,t.complemento', function(err, rows, fields)   
  {  

      if (err) throw err; 
      //res.send(JSON.parse(rows));
      res.json(rows); 

  });	 

});


app.get('/json1', (req, res) => {

  connection.query('select p.mes,p.semana, s.id_sede,s.Institucion, s.sede, g.descripcion, t.complemento, b.Est_Beneficiarios, b.costo from beneficiarios b inner join dim_sedes s on (b.id_sede=s.id_sede) inner join dim_grupoetario g on (b.id_grupo=g.id) inner join dim_tipocomplemento t on (b.id_tipocomplemento=t.id) inner join dim_periodo p on (b.id_periodo=p.id) order by semana,sede asc', function(err, rows, fields)   
  {  
     
    if (err) throw err;

    //var TablaData = JSON.parse(rows);
    //res.send(TablaData);  
    res.json(rows);

  //  connection.end(function(err) {
  	// The connection is terminated now
  	//console.log('connecting database off');
//});
   });

});

/*
app.get('/json1', (req, res) => {
   
  connection.query('select p.semana,b.costo from beneficiarios b inner join dim_tipocomplemento t on (b.id_tipocomplemento=t.id) inner join dim_periodo p on (b.id_periodo=p.id) where t.complemento="CAJMRI"  group by p.semana', function(err, rows, fields)   
  {  
     
      if (err) throw err;  
      res.json(rows); 
   });


});*/





app.use(express.static("public"));

app.get('/*', (req, res) => res.send('Hello World!'))


app.listen(3000, function () {
  console.log('Puerto 3000!');
});


/*const http = require('http');

const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hola Mundo\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});*/