const port=1337;

var chatUsersHandling = require('./chatUsersHandling');
var express = require('express');
var favicon = require('serve-favicon');
var app=express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(favicon(__dirname + '/../public/favicon.ico'));

app.get('/',function(req,res) {
    res.sendfile('./public/index.html');
});

app.get('/statistics', function(req,res){
    res.send("Here you can see our statistics");
});

app.get('/:user', function(req,res){
    res.send("Hello " + req.param('user'));
});


chatUsersHandling.emitConnectionMessages(io);



var server = http.listen(port,function(){
    console.log('Listening on port %d', server.address().port);
});
