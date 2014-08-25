const port = 1337;
var http = require('http');
var util = require('./util');
var userCount = 0;

function increaseUserCountByOne(){
    userCount++;
    console.log("User:"+userCount);
}

function sendResponseWithHelloWorld(response){
    var answer =  util.helloWorld();
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end(answer);
}

var handleDefaultRequest = function (req, res) {
    increaseUserCountByOne();
    sendResponseWithHelloWorld(res);
};

var server = http.createServer();

server.on('request',handleDefaultRequest);

server.listen(port, '127.0.0.1');

console.log('Server running at http://127.0.0.1:'+port+'/');