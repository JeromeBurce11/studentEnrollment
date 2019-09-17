var express = require('express');
var student = require('./scripts/addStudent');
var table = require('./scripts/table')
var app = express();
var cors = require('cors');
app.use(cors())

// respond with "hello world" when a GET request is made to the homepage
app.all('/', function (req, res) {

  res.sendFile(__dirname + '/views/index.html');
  student.addStudent(req);
  //student.addStudent(req,res);
});
app.all('/enroll', function (req, res) {

 res.sendFile(__dirname + '/views/index.html');
 student.addStudent(req);
 //student.addStudent(req,res);
});

app.get("/class/:classname",function(req,res){
  console.log(req.params)
  table.makeTable(req.params.classname,res);
})

app.get('*',function(req,res){
  res.sendStatus("404"); 
})

app.listen(8080);