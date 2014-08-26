const Port = 1337;
var http = require('http');
var util = require('./util');
var requestCount = 0;
var url = require('url');
var username;

function getURLfromBrowser(req) {
    var str = url.format(req.url);
    getPathnamefromURL(str);
}

function getPathnamefromURL(str) {
    username = str.substr(1, str.length);
}

function printHelloUser() {
    if (username != 'favicon.ico') {
        return "Hello " + username +"!";
    }
}

function increaseRequestCountByOne() {
    requestCount++;
}

function sendResponse(response) {
    var answer = checkForAdmin();
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end(answer);
}

function printUserCount() {
    return "Number of users: " + requestCount;
}

function checkForAdmin() {
    if (username == "admin") {
        return printUserCount();
    } else {
        return printHelloUser();
    }
}

var handleDefaultRequest = function (req, res) {
    increaseRequestCountByOne();
    getURLfromBrowser(req);
    sendResponse(res);
};

var server = http.createServer();

server.on('request', handleDefaultRequest);

server.listen(Port, '127.0.0.1');

console.log('Server running at http://127.0.0.1:' + Port + '/');
