
const port=1337;

var express = require('express');
var app=express();

app.get('/', function(req,res){
    res.send('<a href ="http://localhost:1337/myname">http://localhost:1337/myname</a> ')

});
app.get('/statistics', function(req,res){
    res.send("Here you can see our statistics");
});

app.get('/:user', function(req,res){
    res.send("Hello " + req.param('user'));
});
var server = app.listen(port,function(){
    console.log('Listening on port %d', server.address().port);
});