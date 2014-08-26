const port=1337;
//var http = require('http');
//var util = require('./util');
var express = require('express');
var router = express.Router();
//var userCount=0;
var app=express();

app.get('/statistics', function(req,res){
    res.send("Here you can see our statistics");
});

app.get('/:user', function(req,res){
    res.send("Hello " + req.param('user'));
});
var server = app.listen(port,function(){
    console.log('Listening on port %d', server.address().port);
});

/*
//We're counting new users and log them on console
function increaseUserCountByOne() {
    userCount++;
    console.log('User number ' + userCount);
}

function sendResponseWithHelloWorld(res){
    var answer=util.helloWorld();
    //res.writeHead(200, {'Content-Type': 'text/plain'});
    //res.end(answer);
    res.send('Hello World');
}

var handleDefaultRequest = function(req, res){
    increaseUserCountByOne();
    sendResponseWithHelloWorld(res);


};
*/

/*

var server=http.createServer();

server.on('request', handleDefaultRequest);

server.listen(port, 'bilge.local');

console.log('Server running at http://bilge.local:' + port + ' /');

*/