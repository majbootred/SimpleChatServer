const Port = 1337;
var http = require('http');
var util = require('./util');
var userCount = 0;
var url = require('url');
var urlo;

function getURLfromBrowser(req){
    urlo = url.parse(req.url);
   console.log(urlo);
    console.log('////////');
   console.log(urlo['pathname'].split('/')[1]) ;

}

function increaseUserCountByOne() {
    userCount++;
    //console.log("User:" + userCount);
}

function sendResponseWithHelloWorld(response) {
    var answer = util.helloWorld();
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end(answer);
}

var handleDefaultRequest = function (req, res) {
    increaseUserCountByOne();
    sendResponseWithHelloWorld(res);
    getURLfromBrowser(req);
};

var server = http.createServer();

server.on('request', handleDefaultRequest);

server.listen(Port, '127.0.0.1');

console.log('Server running at http://127.0.0.1:' + Port + '/');